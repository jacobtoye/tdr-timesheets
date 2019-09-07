import * as React from 'react';
import styled from '@emotion/styled';
import { CenteredContent } from 'components';
import { theme } from 'utils/theme';
import { TimeRecord } from './TimeRecord';
import TimePeriodType from 'models/TimePeriodType';
import { useTimesheetContext, TimePeriod } from 'screens/Timesheet/TimesheetContext';

const TimeRecordsContainer = styled('div')``;

const DayHeading = styled(CenteredContent)`
  border-bottom: 1px solid ${theme.palette.GREY};
  color: ${theme.palette.text.SECONDARY};
  flex-direction: initial;
  font-size: ${theme.text.body2}px;
  height: ${theme.grid.BASELINE * 9}px;
  width: 100%;
`;

const TimeRecordContainer = styled('div')`
  border-bottom: 1px solid ${theme.palette.GREY};
  padding: ${theme.grid.BASELINE * 3}px 0;
`;

export const TimeRecords: React.FC<{}> = () => {
  const { timesheetState } = useTimesheetContext();

  return (
    <TimeRecordsContainer>
      <DayHeading>
        Today -&nbsp;<strong>7:52</strong>
      </DayHeading>
      <TimeRecordContainer>
        {timesheetState.timePeriods.map((timePeriod: TimePeriod) => (
          <TimeRecord
            key={timePeriod.id}
            startTime={timePeriod.start}
            endTime={timePeriod.end}
            type={timePeriod.type}
          />
        ))}
      </TimeRecordContainer>
    </TimeRecordsContainer>
  );
};
