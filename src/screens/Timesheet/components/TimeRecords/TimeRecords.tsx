import * as React from 'react';
import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import { TimeRecord } from './TimeRecord';
import { useTimesheetContext, TimePeriod } from 'screens/Timesheet/TimesheetContext';
import { DayHeading } from './DayHeading';

const TimeRecordsContainer = styled('div')`
  margin-top: ${theme.grid.BASELINE}px;
`;

const TimeRecordContainer = styled('div')`
  border-bottom: 1px solid ${theme.palette.GREY};
  padding: ${theme.grid.BASELINE * 3}px 0;
`;

export const TimeRecords: React.FC<{}> = () => {
  const { timesheetState } = useTimesheetContext();

  return (
    <TimeRecordsContainer>
      {Object.keys(timesheetState.timePeriods).map((key: string) => {
        return (
          <React.Fragment key={key}>
            <DayHeading day={timesheetState.timePeriods[key]} />
            <TimeRecordContainer>
              {timesheetState.timePeriods[key].periods.map((timePeriod: TimePeriod) => (
                <TimeRecord
                  key={timePeriod.id}
                  startTime={timePeriod.start}
                  endTime={timePeriod.end}
                  type={timePeriod.type}
                />
              ))}
            </TimeRecordContainer>
          </React.Fragment>
        );
      })}
    </TimeRecordsContainer>
  );
};
