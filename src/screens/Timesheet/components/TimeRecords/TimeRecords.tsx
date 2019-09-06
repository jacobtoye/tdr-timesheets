import * as React from 'react';
import styled from '@emotion/styled';
import { CenteredContent } from 'components';
import { theme } from 'utils/theme';
import { TimeRecord } from './TimeRecord';
import TimePeriodType from 'models/TimePeriodType';

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
  return (
    <TimeRecordsContainer>
      <DayHeading>
        Today -&nbsp;<strong>7:52</strong>
      </DayHeading>
      <TimeRecordContainer>
        <TimeRecord startTime={1567632854991} endTime={1567643674338} type={TimePeriodType.Normal} />
      </TimeRecordContainer>
    </TimeRecordsContainer>
  );
};
