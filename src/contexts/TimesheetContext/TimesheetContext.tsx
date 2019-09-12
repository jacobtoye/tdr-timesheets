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
  timeRecords: TimeRecord[];
  durationInMilliseconds: number;
  timePeriodTypeTotals: Record<TimePeriodType, number>;
}

interface TimesheetState {
  activePeriod?: ActiveTimeRecord;
  dayRecords: Record<string, DayRecord>;
  timeRecords: TimeRecord[];
}

interface TimesheetContext {
  timesheetState: TimesheetState;
  startActivePeriod: () => void;
  endActivePeriod: () => void;
  deleteActivePeriod: () => void;
  deletePeriod: (id: number) => void;
}

const emptyDayRecord = (): DayRecord => {
  return {
    timeRecords: [],
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

const sortPeriods = (periods: TimeRecord[], isAscending = true): TimeRecord[] => {
  const modifier = isAscending ? 1 : -1;

  return periods.sort((a, b) => {
    if (a.start < b.start) {
      return -1 * modifier;
    } else if (a.start > b.start) {
      return 1 * modifier;
    }

    return 0;
  });
};

const separateByDays = (periods: TimeRecord[]): Record<string, DayRecord> => {
  const dayRecords = sortPeriods([...periods], false).reduce((map: Record<string, DayRecord>, period: TimeRecord) => {
    const date = format(period.start, 'yyyy-MM-dd');

    if (!map[date]) {
      map[date] = emptyDayRecord();
    }

    map[date].timeRecords.push(period);

    const duration = period.end - period.start;
    map[date].durationInMilliseconds += duration;
    map[date].timePeriodTypeTotals[period.type] += duration;

    return map;
  }, {});

  // sort each day's periods so the appear in an obvious order
  Object.keys(dayRecords).forEach(key => {
    dayRecords[key].timeRecords = sortPeriods(dayRecords[key].timeRecords);
  });

  return dayRecords;
};

const initialState: TimesheetState = {
  activePeriod: undefined,
  dayRecords: separateByDays(dummyPeriods),
  timeRecords: dummyPeriods,
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
      const newTimeRecord = {
        id: activePeriod.start,
        start: activePeriod.start,
        end: Date.now(),
        type: TimePeriodType.Normal,
      };

      const timeRecords = [...timesheetState.timeRecords, newTimeRecord];

      setTimesheetState({
        activePeriod: undefined,
        dayRecords: separateByDays(timeRecords),
        timeRecords,
      });
    }
  };

  const deleteActivePeriod = () => {
    // TODO: delete from the dictionary
  };

  const deletePeriod = (id: number) => {
    const timeRecords = timesheetState.timeRecords.filter(timeRecord => {
      if (timeRecord.id === id) {
        return false;
      }

      return true;
    });

    setTimesheetState({
      ...timesheetState,
      dayRecords: separateByDays(timeRecords),
      timeRecords,
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
