import * as React from 'react';
import styled from '@emotion/styled';
import { ActiveTimeEntry } from './components';
import { TimesheetProvider } from './TimesheetContext';

const TimesheetScreenWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`;

const TimesheetScreen: React.FC<{}> = () => {
  return (
    <TimesheetProvider>
      <TimesheetScreenWrapper>
        <ActiveTimeEntry />
      </TimesheetScreenWrapper>
    </TimesheetProvider>
  );
};

export default TimesheetScreen;
