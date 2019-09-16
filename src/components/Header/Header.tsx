import styled from '@emotion/styled';
import { CenteredContent } from 'components';
import { theme } from 'utils/theme';

export const HeaderButton = styled(CenteredContent)`
  color: ${theme.palette.text.GREY};
  font-size: ${theme.text.h3.SIZE}px;
  height: ${theme.grid.BASELINE * 5}px;
  width: ${theme.grid.BASELINE * 5}px;
`;

export const HeaderText = styled('div')`
  font-size: ${theme.text.h3.SIZE}px;
  justify-self: center;
`;

export const Header = styled('div')`
  align-items: center;
  display: grid;
  grid-template-columns: ${theme.grid.BASELINE * 5}px auto ${theme.grid.BASELINE * 5}px;
  height: ${theme.grid.BASELINE * 7}px;
  margin: ${theme.grid.BASELINE}px 0;
`;
