import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

const BaseScreen = styled('div')`
  background-color: ${theme.palette.background.MAIN};
  color: ${theme.palette.text.PRIMARY};
  display: flex;
  flex-direction: column;
  font-size: 16px;
  min-height: 100vh;
  width: 100vw;
`;

export default BaseScreen;
