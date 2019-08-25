import * as React from 'react';
import styled from '@emotion/styled';
import { AppBar, BaseScreen, NavBar } from '../index';

const ContentContainer = styled('div')`
  position: relative;
`;

interface MainLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <BaseScreen>
      <AppBar />
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
    </BaseScreen>
  );
};

export default MainLayout;
