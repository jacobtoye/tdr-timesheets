import * as React from 'react';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import TimePeriodType from 'models/TimePeriodType';

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
  timePeriods: Record<string, DayRecord>;
}

interface TimesheetContext {
  timesheetState: TimesheetState;
  startPeriod: () => void;
  endPeriod: () => void;
  deletePeriod: (id: number) => void;
}

const today = new Date();
const days = [today, addDays(today, -1), addDays(today, -2), addDays(today, -3), addDays(today, -4)];
const initialPeriods = [
  {
    id: 5,
    start: setMinutes(setHours(days[0], 9), 0).getTime(),
    end: setMinutes(setHours(days[0], 13), 0).getTime(),
    type: TimePeriodType.Normal,
  },
  {
    id: 6,
    start: setMinutes(setHours(days[0], 13), 30).getTime(),
    end: setMinutes(setHours(days[0], 18), 15).getTime(),
    type: TimePeriodType.Normal,
  },
  {
    id: 3,
    start: setMinutes(setHours(days[1], 10), 0).getTime(),
    end: setMinutes(setHours(days[1], 13), 0).getTime(),
    type: TimePeriodType.Sick,
  },
  {
    id: 4,
    start: setMinutes(setHours(days[1], 13), 30).getTime(),
    end: setMinutes(setHours(days[1], 18), 15).getTime(),
    type: TimePeriodType.Sick,
  },
  {
    id: 2,
    start: setMinutes(setHours(days[3], 13), 0).getTime(),
    end: setMinutes(setHours(days[3], 20), 15).getTime(),
    type: TimePeriodType.Training,
  },
  {
    id: 0,
    start: setMinutes(setHours(days[4], 8), 45).getTime(),
    end: setMinutes(setHours(days[4], 13), 0).getTime(),
    type: TimePeriodType.Normal,
  },
  {
    id: 1,
    start: setMinutes(setHours(days[4], 13), 30).getTime(),
    end: setMinutes(setHours(days[4], 15), 45).getTime(),
    type: TimePeriodType.Normal,
  },
];

const processPeriods = (periods: TimeRecord[]) => {
  return periods.reduce((map: Record<string, DayRecord>, period: TimeRecord) => {
    const date = format(period.start, 'yyyy-MM-dd');

    if (!map[date]) {
      map[date] = {
        periods: [],
        durationInMilliseconds: 0,
        timePeriodTypeTotals: {
          [TimePeriodType.Normal]: 0,
          [TimePeriodType.AnnualLeave]: 0,
          [TimePeriodType.Sick]: 0,
          [TimePeriodType.Training]: 0,
          [TimePeriodType.Stat]: 0,
        },
      };
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
  timePeriods: processPeriods(initialPeriods),
};

export const TimesheetContext = React.createContext<TimesheetContext>({
  timesheetState: initialState,
  startPeriod: () => {},
  endPeriod: () => {},
  deletePeriod: () => {},
});

export const TimesheetProvider: React.FC<{}> = ({ children }) => {
  const [timesheetState, setTimesheetState] = React.useState<TimesheetState>(initialState);

  // TODO: need to separate out the active and the time periods
  const startPeriod = () => {
    if (timesheetState.activePeriod) {
      // TODO: error since can't start a new active period if one is active
      return;
    }

    const now = Date.now();
    const newPeriod: ActiveTimeRecord = {
      start: now,
      type: TimePeriodType.Normal,
    };

    // TODO: is there a nicer way of setting state, if this got big would be a pain to manage.
    // really just want to set activePeriod here
    setTimesheetState({
      activePeriod: newPeriod,
      timePeriods: timesheetState.timePeriods,
    });
  };

  const endPeriod = () => {
    if (timesheetState.activePeriod) {
      // TODO: implement actually adding to the timePeriods
      setTimesheetState({
        activePeriod: undefined,
        timePeriods: timesheetState.timePeriods,
      });
    }
  };

  const deletePeriod = (id: number) => {
    // TODO: delete from the dictionary
  };

  return (
    <TimesheetContext.Provider
      value={{
        timesheetState,
        startPeriod,
        endPeriod,
        deletePeriod,
      }}
    >
      {children}
    </TimesheetContext.Provider>
  );
};

export const useTimesheetContext = () => React.useContext(TimesheetContext);
