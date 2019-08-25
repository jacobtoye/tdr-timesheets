import * as React from 'react';
import { AppBar, BaseScreen, NavBar } from '../index';

interface MainLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <BaseScreen>
      <AppBar />
      <NavBar />
      {children}
    </BaseScreen>
  );
};

export default MainLayout;
