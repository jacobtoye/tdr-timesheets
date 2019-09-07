import * as React from 'react';
import TimePeriodType from 'models/TimePeriodType';

export interface ActiveTimeRecord {
  start: number;
  type: TimePeriodType;
}

export interface TimePeriod {
  id: number;
  start: number;
  end: number;
  type: TimePeriodType;
}

interface TimesheetState {
  activePeriod?: ActiveTimeRecord;
  timePeriods: Record<string, TimePeriod[]>;
}

interface TimesheetContext {
  timesheetState: TimesheetState;
  startPeriod: () => void;
  endPeriod: () => void;
  deletePeriod: (id: number) => void;
}

const initialState: TimesheetState = {
  activePeriod: undefined,
  timePeriods: {
    '2019-09-06': [
      {
        id: 5,
        start: 1567717200000,
        end: 1567731600000,
        type: TimePeriodType.Normal,
      },
      {
        id: 6,
        start: 1567733400000,
        end: 1567750500000,
        type: TimePeriodType.Normal,
      },
    ],
    '2019-09-05': [
      {
        id: 3,
        start: 1567634400000,
        end: 1567645200000,
        type: TimePeriodType.Sick,
      },
      {
        id: 4,
        start: 1567647000000,
        end: 1567664100000,
        type: TimePeriodType.Sick,
      },
    ],
    '2019-09-04': [
      {
        id: 2,
        start: 1567558800000,
        end: 1567584900000,
        type: TimePeriodType.Training,
      },
    ],
    '2019-09-03': [
      {
        id: 0,
        start: 1567457100000,
        end: 1567472400000,
        type: TimePeriodType.Normal,
      },
      {
        id: 1,
        start: 1567474200000,
        end: 1567482300000,
        type: TimePeriodType.Normal,
      },
    ],
  },
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
