import * as React from 'react';
import format from 'date-fns/format';
import TimeRecordType from 'models/TimeRecordType';
import { dummyRecords } from './dummyRecords';

export interface ActiveTimeRecord {
  start: number;
  type: TimeRecordType;
}

export interface TimeRecord {
  id: number;
  start: number;
  end: number;
  type: TimeRecordType;
}

export interface DayRecord {
  timeRecords: TimeRecord[];
  durationInMilliseconds: number;
  timeRecordTypeTotals: Record<TimeRecordType, number>;
}

interface TimesheetState {
  activeRecord?: ActiveTimeRecord;
  dayRecords: Record<string, DayRecord>;
  timeRecords: TimeRecord[];
}

interface TimesheetContext {
  timesheetState: TimesheetState;
  startActiveRecord: () => void;
  endActiveRecord: () => void;
  deleteActiveRecord: () => void;
  deleteRecord: (id: number) => void;
}

const sortRecords = (records: TimeRecord[], isAscending = true): TimeRecord[] => {
  const modifier = isAscending ? 1 : -1;

  return records.sort((a, b) => {
    if (a.start < b.start) {
      return -1 * modifier;
    } else if (a.start > b.start) {
      return 1 * modifier;
    }

    return 0;
  });
};

const separateByDays = (records: TimeRecord[]): Record<string, DayRecord> => {
  const dayRecords = sortRecords([...records], false).reduce((map: Record<string, DayRecord>, record: TimeRecord) => {
    const date = format(record.start, 'yyyy-MM-dd');

    if (!map[date]) {
      map[date] = {
        timeRecords: [],
        durationInMilliseconds: 0,
        timeRecordTypeTotals: {
          [TimeRecordType.Normal]: 0,
          [TimeRecordType.AnnualLeave]: 0,
          [TimeRecordType.Sick]: 0,
          [TimeRecordType.Training]: 0,
          [TimeRecordType.Stat]: 0,
        },
      };
    }

    map[date].timeRecords.push(record);

    const duration = record.end - record.start;
    map[date].durationInMilliseconds += duration;
    map[date].timeRecordTypeTotals[record.type] += duration;

    return map;
  }, {});

  // sort each day's records so the appear in an obvious order
  Object.keys(dayRecords).forEach(key => {
    dayRecords[key].timeRecords = sortRecords(dayRecords[key].timeRecords);
  });

  return dayRecords;
};

const initialState: TimesheetState = {
  activeRecord: undefined,
  dayRecords: separateByDays(dummyRecords),
  timeRecords: dummyRecords,
};

export const TimesheetContext = React.createContext<TimesheetContext>({
  timesheetState: initialState,
  startActiveRecord: () => {},
  endActiveRecord: () => {},
  deleteActiveRecord: () => {},
  deleteRecord: () => {},
});

// TODO: the code in here could get big. Should move it out
export const TimesheetProvider: React.FC<{}> = ({ children }) => {
  const [timesheetState, setTimesheetState] = React.useState<TimesheetState>(initialState);

  const startActiveRecord = () => {
    if (timesheetState.activeRecord) {
      // TODO: error since can't start a new active record if one is active
      return;
    }

    setTimesheetState({
      ...timesheetState,
      activeRecord: {
        start: Date.now(),
        type: TimeRecordType.Normal,
      },
    });
  };

  const endActiveRecord = () => {
    const activeRecord = timesheetState.activeRecord;
    if (activeRecord) {
      const newTimeRecord = {
        id: activeRecord.start,
        start: activeRecord.start,
        end: Date.now(),
        type: TimeRecordType.Normal,
      };

      const timeRecords = [...timesheetState.timeRecords, newTimeRecord];

      setTimesheetState({
        activeRecord: undefined,
        dayRecords: separateByDays(timeRecords),
        timeRecords,
      });
    }
  };

  const deleteActiveRecord = () => {
    // TODO: delete from the dictionary
  };

  const deleteRecord = (id: number) => {
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
        startActiveRecord,
        endActiveRecord,
        deleteActiveRecord,
        deleteRecord,
      }}
    >
      {children}
    </TimesheetContext.Provider>
  );
};

export const useTimesheetContext = () => React.useContext(TimesheetContext);
