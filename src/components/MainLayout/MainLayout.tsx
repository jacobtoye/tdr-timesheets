import * as React from 'react';
import { BaseScreen } from '../BaseScreen';
import { AppBar } from '../AppBar';
import { TabBar } from '../TabBar';

interface MainLayoutProps {
  children?: JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <BaseScreen>
      <AppBar />
      <TabBar />
      {children}
    </BaseScreen>
  );
};

export default MainLayout;
