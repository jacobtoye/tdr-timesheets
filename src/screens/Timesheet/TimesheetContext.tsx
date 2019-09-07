import * as React from 'react';
import TimePeriodType from 'models/TimePeriodType';

export interface ActiveTimeRecord {
  start: number;
  type: TimePeriodType;
}

export interface TimePeriod {
  id: number;
  start: number;
  end?: number;
}

interface TimesheetState {
  activePeriod?: TimePeriod;
  timePeriods: Record<number, TimePeriod>;
  activePeriod?: ActiveTimeRecord;
}

interface TimesheetContext {
  timesheetState: TimesheetState;
  startPeriod: () => void;
  endPeriod: (id: number) => void;
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
    const newPeriod: TimePeriod = {
      id: now, // TODO: will need to fix when hook up server comms (will be the DB id)
      start: now,
    };

    // TODO: is there a nicer way of setting state, if this got big would be a pain to manage.
    // really just want to set activePeriod here
    setTimesheetState({
      activePeriod: newPeriod,
      timePeriods: timesheetState.timePeriods,
    });
  };

  const endPeriod = (id: number) => {
    // TODO: currently only support ending the active period. Should change to also suppoprt editing
    // the time periods too
    if (timesheetState.activePeriod && timesheetState.activePeriod.id === id) {
      // TODO: implement actually adding to the timePeriods
      setTimesheetState({
        activePeriod: undefined,
        timePeriods: timesheetState.timePeriods,
      });
    }
  };

  const deletePeriod = (id: number) => {
    if (timesheetState.activePeriod && timesheetState.activePeriod.id === id) {
      setTimesheetState({
        activePeriod: undefined,
        timePeriods: timesheetState.timePeriods,
      });
    } else if (timesheetState.timePeriods[id]) {
      // TODO: delete from the dictionary
    }
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
