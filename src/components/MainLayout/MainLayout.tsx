import * as React from 'react';
import { TimesheetProvider } from 'contexts/TimesheetContext';

const MainLayout: React.FC<{}> = ({ children }) => {
  return <TimesheetProvider>{children}</TimesheetProvider>;
};

export default MainLayout;
