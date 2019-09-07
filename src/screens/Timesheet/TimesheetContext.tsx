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
  timePeriods: TimePeriod[];
}

interface TimesheetContext {
  timesheetState: TimesheetState;
  startPeriod: () => void;
  endPeriod: () => void;
  deletePeriod: (id: number) => void;
}

const initialState: TimesheetState = {
  activePeriod: undefined,
  timePeriods: {},
};

export const TimesheetContext = React.createContext<TimesheetContext>({
  timesheetState: initialState,
  startPeriod: () => {},
  endPeriod: () => {},
  deletePeriod: () => {},
});

export const TimesheetProvider: React.FC<{}> = ({ children }) => {
  const [timesheetState, setTimesheetState] = React.useState<TimesheetState>(initialState);

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
