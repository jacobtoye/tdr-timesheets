import * as React from 'react';
import styled from '@emotion/styled';
import CenteredContainer from '../CenteredContainer';

// TODO: need a generic button component
export const Button = styled(CenteredContainer)`
  background: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
`;

interface AppBarButton {
  children?: React.ReactNode;
  onClick?: () => void;
}

const AppBarButton: React.FC<AppBarButton> = ({ children, onClick }: AppBarButton) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default AppBarButton;
