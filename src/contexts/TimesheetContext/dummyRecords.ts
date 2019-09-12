import { addDays, setMinutes, setHours } from 'date-fns/esm';

import TimeRecordType from 'models/TimeRecordType';

const today = new Date();
const days = [addDays(today, -1), addDays(today, -2), addDays(today, -3), addDays(today, -4)];

export const dummyRecords = [
  {
    id: 5,
    start: setMinutes(setHours(days[0], 9), 0).getTime(),
    end: setMinutes(setHours(days[0], 13), 0).getTime(),
    type: TimeRecordType.Normal,
  },
  {
    id: 6,
    start: setMinutes(setHours(days[0], 13), 30).getTime(),
    end: setMinutes(setHours(days[0], 18), 15).getTime(),
    type: TimeRecordType.Normal,
  },
  {
    id: 3,
    start: setMinutes(setHours(days[1], 10), 0).getTime(),
    end: setMinutes(setHours(days[1], 13), 0).getTime(),
    type: TimeRecordType.Sick,
  },
  {
    id: 4,
    start: setMinutes(setHours(days[1], 13), 30).getTime(),
    end: setMinutes(setHours(days[1], 18), 15).getTime(),
    type: TimeRecordType.Sick,
  },
  {
    id: 2,
    start: setMinutes(setHours(days[2], 13), 0).getTime(),
    end: setMinutes(setHours(days[2], 20), 15).getTime(),
    type: TimeRecordType.Training,
  },
  {
    id: 0,
    start: setMinutes(setHours(days[3], 8), 45).getTime(),
    end: setMinutes(setHours(days[3], 13), 0).getTime(),
    type: TimeRecordType.Normal,
  },
  {
    id: 1,
    start: setMinutes(setHours(days[3], 13), 30).getTime(),
    end: setMinutes(setHours(days[3], 15), 45).getTime(),
    type: TimeRecordType.Normal,
  },
];
