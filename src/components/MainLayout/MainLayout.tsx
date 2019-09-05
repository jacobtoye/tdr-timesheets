import * as React from 'react';
import { TimesheetProvider } from 'screens/Timesheet/TimesheetContext';

const MainLayout: React.FC<{}> = ({ children }) => {
  return <TimesheetProvider>{children}</TimesheetProvider>;
};

export default MainLayout;
