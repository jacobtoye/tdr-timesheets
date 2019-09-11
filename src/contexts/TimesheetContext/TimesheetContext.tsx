import * as React from 'react';
import format from 'date-fns/format';
import TimePeriodType from 'models/TimePeriodType';
import { dummyPeriods } from './dummyPeriods';

export interface ActiveTimeRecord {
  start: number;
  type: TimePeriodType;
}

export interface TimeRecord {
  id: number;
  start: number;
  end: number;
  type: TimePeriodType;
}

export interface DayRecord {
  periods: TimeRecord[];
  durationInMilliseconds: number;
  timePeriodTypeTotals: Record<TimePeriodType, number>;
}

interface TimesheetState {
  activePeriod?: ActiveTimeRecord;
  dayRecords: Record<string, DayRecord>;
}

interface TimesheetContext {
  timesheetState: TimesheetState;
  startActivePeriod: () => void;
  endActivePeriod: () => void;
  deleteActivePeriod: () => void;
  deletePeriod: (id: number, date: string) => void;
}

const emptyDayRecord = (): DayRecord => {
  return {
    periods: [],
    durationInMilliseconds: 0,
    timePeriodTypeTotals: {
      [TimePeriodType.Normal]: 0,
      [TimePeriodType.AnnualLeave]: 0,
      [TimePeriodType.Sick]: 0,
      [TimePeriodType.Training]: 0,
      [TimePeriodType.Stat]: 0,
    },
  } as DayRecord;
};

const processPeriods = (periods: TimeRecord[]) => {
  return periods.reduce((map: Record<string, DayRecord>, period: TimeRecord) => {
    const date = format(period.start, 'yyyy-MM-dd');

    if (!map[date]) {
      map[date] = emptyDayRecord();
    }

    // TODO: sort
    map[date].periods.push(period);

    const duration = period.end - period.start;
    map[date].durationInMilliseconds += duration;
    map[date].timePeriodTypeTotals[period.type] += duration;

    return map;
  }, {});
};

const initialState: TimesheetState = {
  activePeriod: undefined,
  timePeriods: processPeriods(dummyPeriods),
};

export const TimesheetContext = React.createContext<TimesheetContext>({
  timesheetState: initialState,
  startActivePeriod: () => {},
  endActivePeriod: () => {},
  deleteActivePeriod: () => {},
  deletePeriod: () => {},
});

// TODO: the code in here could get big. Should move it out
export const TimesheetProvider: React.FC<{}> = ({ children }) => {
  const [timesheetState, setTimesheetState] = React.useState<TimesheetState>(initialState);

  const startActivePeriod = () => {
    if (timesheetState.activePeriod) {
      // TODO: error since can't start a new active period if one is active
      return;
    }

    setTimesheetState({
      ...timesheetState,
      activePeriod: {
        start: Date.now(),
        type: TimePeriodType.Normal,
      },
    });
  };

  const endActivePeriod = () => {
    const activePeriod = timesheetState.activePeriod;
    if (activePeriod) {
      const date = format(activePeriod.start, 'yyyy-MM-dd');
      const now = Date.now();
      const newTimeRecord = {
        id: activePeriod.start,
        start: activePeriod.start,
        end: now,
        type: TimePeriodType.Normal,
      };
      const duration = now - activePeriod.start;
      let dayRecord: DayRecord = timesheetState.dayRecords[date];

      if (!dayRecord) {
        dayRecord = emptyDayRecord();
      }

      setTimesheetState({
        activePeriod: undefined,
        dayRecords: {
          ...timesheetState.dayRecords,
          [date]: {
            // Add new TimeRecord to end, assuming this is sorted.
            periods: [...dayRecord.periods, newTimeRecord],
            // Update the duration values
            durationInMilliseconds: dayRecord.durationInMilliseconds + duration,
            timePeriodTypeTotals: {
              ...dayRecord.timePeriodTypeTotals,
              [newTimeRecord.type]: dayRecord.timePeriodTypeTotals[newTimeRecord.type] + duration,
            },
          },
        },
      });
    }
  };

  const deleteActivePeriod = () => {
    // TODO: delete from the dictionary
  };

  const deletePeriod = (id: number, date: string) => {
    const dayRecord: DayRecord = timesheetState.dayRecords[date];

    if (!dayRecord) {
      // TODO: error! the passed in date did not exist in the dictionary?
      return;
    }

    if (dayRecord.periods.length === 1 && dayRecord.periods[0].id === id) {
      // Uses object destructing to remove the DayRecord as the period we are deleting is the only period left for that day.
      const { [date]: removed, ...remainingPeriods } = timesheetState.dayRecords;

      setTimesheetState({
        ...timesheetState,
        dayRecords: remainingPeriods,
      });

      return;
    }

    let removedPeriod: TimeRecord | undefined;
    // Remove the period from the day. We use Array.filter() to ensure we don't mutate the existing periods array
    const periods = timesheetState.dayRecords[date].periods.filter(period => {
      if (period.id === id) {
        removedPeriod = period;
        return false;
      }

      return true;
    });

    if (!removedPeriod) {
      // TODO: error? this would be the case if the id or date were wrong
      return;
    }

    const removedPeriodDuration = removedPeriod.end - removedPeriod.start;

    setTimesheetState({
      ...timesheetState,
      dayRecords: {
        ...timesheetState.dayRecords,
        [date]: {
          periods,
          durationInMilliseconds: dayRecord.durationInMilliseconds - removedPeriodDuration,
          timePeriodTypeTotals: {
            ...dayRecord.timePeriodTypeTotals,
            [removedPeriod.type]: dayRecord.timePeriodTypeTotals[removedPeriod.type] - removedPeriodDuration,
          },
        },
      },
    });
  };

  return (
    <TimesheetContext.Provider
      value={{
        timesheetState,
        startActivePeriod,
        endActivePeriod,
        deleteActivePeriod,
        deletePeriod,
      }}
    >
      {children}
    </TimesheetContext.Provider>
  );
};

export const useTimesheetContext = () => React.useContext(TimesheetContext);
