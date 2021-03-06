import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const BaseScreen = styled('div')`
  background-color: ${theme.palette.background.MAIN};
  color: ${theme.palette.text.PRIMARY};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 ${theme.grid.MARGIN}px;
  width: 100vw;
  user-select: none;
`;
