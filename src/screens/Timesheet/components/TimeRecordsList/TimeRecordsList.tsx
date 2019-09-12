import * as React from 'react';
import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import { TimeRecordListItem } from './TimeRecordListItem';
import { useTimesheetContext, TimeRecord } from 'contexts/TimesheetContext/TimesheetContext';
import { DayHeading } from './DayHeading';

const TimeRecordsContainer = styled('div')`
  margin-top: ${theme.grid.BASELINE}px;
`;

const TimeRecordContainer = styled('div')`
  border-bottom: 1px solid ${theme.palette.GREY};
  padding: ${theme.grid.BASELINE * 3}px 0;

  /* Need to do this here as the child div is a 3rd part component that is not emotion styled */
  & > div:last-child {
    margin-bottom: 0 !important;
  }
`;

export const TimeRecordsList: React.FC<{}> = () => {
  const { timesheetState, deleteRecord: deletePeriod } = useTimesheetContext();
  console.log(`render list ${Date.now()}`);
  return (
    <TimeRecordsContainer>
      {Object.keys(timesheetState.dayRecords).map((key: string) => {
        return (
          <React.Fragment key={key}>
            <DayHeading day={timesheetState.dayRecords[key]} />
            <TimeRecordContainer>
              {timesheetState.dayRecords[key].timeRecords.map((timePeriod: TimeRecord) => (
                <TimeRecordListItem
                  key={timePeriod.id}
                  id={timePeriod.id}
                  startTime={timePeriod.start}
                  endTime={timePeriod.end}
                  type={timePeriod.type}
                  deletePeriod={deletePeriod}
                />
              ))}
            </TimeRecordContainer>
          </React.Fragment>
        );
      })}
    </TimeRecordsContainer>
  );
};
