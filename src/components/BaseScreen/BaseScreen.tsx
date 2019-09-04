import styled from '@emotion/styled';
import theme from '../../utils/theme';

const BaseScreen = styled('div')`
  background-color: ${theme.palette.background.MAIN};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default BaseScreen;
