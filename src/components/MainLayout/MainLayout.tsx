import * as React from 'react';
import { BaseScreen } from '../BaseScreen';
import { AppBar } from '../AppBar';

interface MainLayoutProps {
  children?: JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <BaseScreen>
      <AppBar />
      {children}
    </BaseScreen>
  );
};

export default MainLayout;
