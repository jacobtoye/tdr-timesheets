import * as React from 'react';
import styled from '@emotion/styled';

const TimesheetScreenWrapper = styled('div')`
  align-items: center;
  color: #704270;
  display: flex;
  flex-direction: column;
  font-size: 32px;
  padding-top: 120px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`;

const TimesheetScreen: React.FC<{}> = () => {
  return <TimesheetScreenWrapper>Timesheet</TimesheetScreenWrapper>;
};

export default TimesheetScreen;
