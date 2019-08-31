import * as React from 'react';
import styled from '@emotion/styled';
import { ActiveTimeEntry, TimeEntry } from './components';
import { useTimesheetContext } from './TimesheetContext';

const TimesheetScreenWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`;

const DayHeader = styled('div')`
  align-self: flex-start;
  background-color: #e0dce08a;
  color: #6c3e66;
  font-size: 12px;
  font-weight: 600;
  height: 32px;
  line-height: 32px;
  padding: 0 24px;
  width: 100vw;
`;

const TimesheetScreen: React.FC<{}> = () => {
  const { timesheetState } = useTimesheetContext();

  return (
    <TimesheetScreenWrapper>
      <DayHeader>Today</DayHeader>
      <TimeEntry key={1} start={1567198625434} end={1567209440750} />
      <TimeEntry key={2} start={1567191503704} end={1567195106579} />
    </TimesheetScreenWrapper>
  );
};

export default TimesheetScreen;
