import * as React from 'react';
import styled from '@emotion/styled';
import { AppBar, BaseScreen, NavBar } from '../index';
import { TimesheetProvider } from '../../screens/Timesheet/TimesheetContext';

const ContentContainer = styled('div')`
  position: relative;
`;

interface MainLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
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
