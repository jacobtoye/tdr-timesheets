import * as React from 'react';
import styled from '@emotion/styled';
import { AppBar, BaseScreen, NavBar } from '../index';
import { TimesheetProvider } from '../../screens/Timesheet/TimesheetContext';

const ContentContainer = styled('div')`
  position: relative;
`;

const MainLayout: React.FC<{}> = ({ children }) => {
  return (
    <TimesheetProvider>
      <BaseScreen>
        <AppBar />
        <NavBar />
        <ContentContainer>{children}</ContentContainer>
      </BaseScreen>
    </TimesheetProvider>
  );
};

export default MainLayout;
