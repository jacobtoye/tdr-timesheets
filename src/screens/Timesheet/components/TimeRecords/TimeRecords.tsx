import * as React from 'react';
import styled from '@emotion/styled';
import { CenteredContent } from 'components';

const TimeRecordsContainer = styled('div')`
  padding: 0 13px;
  margin-top: 14px;
`;

const DayHeading = styled(CenteredContent)`
  border-bottom: 1px solid #f5f1ea;
  color: #938e88;
  font-size: 14px;
  height: 63px;
`;

const Icon = styled('div')`
  border-radius: 7px;
  height: 10px;
  justify-self: center;
  width: 10px;
`;

const TimeRecordContainer = styled('div')`
  border-bottom: 1px solid #f5f1ea;
  padding: 21px 0;
`;

const TimeRecord = styled('div')`
  align-items: center;
  display: grid;
  grid-gap: 0 13px;
  grid-template-columns: 19px auto;
  height: 42px;
  margin-bottom: 21px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const NormalIcon = styled(Icon)`
  background-color: #4c83c0;
`;

const TrainingIcon = styled(Icon)`
  background-color: #e5bf73;
`;

const LeaveIcon = styled(Icon)`
  background-color: #68b5b1;
`;

const TimePeriod = styled('div')`
  height: 21px;
  line-height: 21px;
`;

const TimePeriodTotal = styled('div')`
  color: #b3ada7;
  font-size: 14px;
  grid-column-start: 2;
  grid-column-end: 2;
  height: 21px;
  line-height: 21px;
`;

const TimeRecords: React.FC<{}> = () => {
  return (
    <TimeRecordsContainer>
      <DayHeading>Today - 7:52</DayHeading>
      <TimeRecordContainer>
        <TimeRecord>
          <NormalIcon />
          <TimePeriod>12:42 pm - 5:03 pm</TimePeriod>
          <TimePeriodTotal>5:21</TimePeriodTotal>
        </TimeRecord>
        <TimeRecord>
          <NormalIcon />
          <TimePeriod>8:30 am - 12:03 pm</TimePeriod>
          <TimePeriodTotal>3:33</TimePeriodTotal>
        </TimeRecord>
      </TimeRecordContainer>
      <DayHeading>Tuesday, Sep 3rd - 9:45</DayHeading>
      <TimeRecordContainer>
        <TimeRecord>
          <NormalIcon />
          <TimePeriod>1:00 pm - 8:25 pm</TimePeriod>
          <TimePeriodTotal>7:25</TimePeriodTotal>
        </TimeRecord>
        <TimeRecord>
          <NormalIcon />
          <TimePeriod>9:40 am - 12:00 pm</TimePeriod>
          <TimePeriodTotal>2:20</TimePeriodTotal>
        </TimeRecord>
      </TimeRecordContainer>
      <DayHeading>Monday, Sep 32nd - 4:30</DayHeading>
      <TimeRecordContainer>
        <TimeRecord>
          <TrainingIcon />
          <TimePeriod>12:30 pm - 5:00 pm</TimePeriod>
          <TimePeriodTotal>4:30</TimePeriodTotal>
        </TimeRecord>
      </TimeRecordContainer>
      <DayHeading>Friday, Aug 30th - 7:30</DayHeading>
      <TimeRecordContainer>
        <TimeRecord>
          <NormalIcon />
          <TimePeriod>12:00 pm - 5:00 pm</TimePeriod>
          <TimePeriodTotal>5:00</TimePeriodTotal>
        </TimeRecord>
        <TimeRecord>
          <NormalIcon />
          <TimePeriod>8:30 am - 11:00 pm</TimePeriod>
          <TimePeriodTotal>2:30</TimePeriodTotal>
        </TimeRecord>
      </TimeRecordContainer>
      <DayHeading>Thursday, Aug 29th - 8:00</DayHeading>
      <TimeRecordContainer>
        <TimeRecord>
          <LeaveIcon />
          <TimePeriod>8:00 annual leave</TimePeriod>
        </TimeRecord>
      </TimeRecordContainer>
    </TimeRecordsContainer>
  );
};

export default TimeRecords;
