import * as React from 'react';
import { AppBar, BaseScreen, TabBar } from '../index';

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
