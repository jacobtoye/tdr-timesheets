import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import tdrLogo from 'assets/images/tdr-logo-black.png';

export const Logo = styled('div')`
  align-self: center;
  background-color: ${theme.palette.background.DARK};
  background-image: url('${tdrLogo}');
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 55px;
  margin-top: 109px;
  width: 109px;
  height:109px;
`;
