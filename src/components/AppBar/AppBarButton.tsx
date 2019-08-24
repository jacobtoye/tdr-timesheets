import * as React from 'react';
import styled from '@emotion/styled';

// TODO: need a generic button component
export const Button = styled('button')`
  background: transparent;
  border: 0;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1rem;
  text-transform: uppercase;
  width: 100%;
`;

// TODO: should export the above and move this to a specific button e.g. MenuButton
const AppBarButton: React.FC<{}> = () => {
  return <Button>&times;</Button>;
};

export default AppBarButton;
