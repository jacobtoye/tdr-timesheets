import * as React from 'react';
import { TimesheetProvider } from 'contexts/TimesheetContext';

export const MainLayout: React.FC<{}> = ({ children }) => {
  return <TimesheetProvider>{children}</TimesheetProvider>;
};
