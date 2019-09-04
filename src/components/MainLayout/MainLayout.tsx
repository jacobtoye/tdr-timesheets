import * as React from 'react';
import { BaseScreen } from '../index';
import { TimesheetProvider } from '../../screens/Timesheet/TimesheetContext';

const MainLayout: React.FC<{}> = ({ children }) => {
  return (
    <TimesheetProvider>
      <BaseScreen>{children}</BaseScreen>
    </TimesheetProvider>
  );
};

export default MainLayout;
