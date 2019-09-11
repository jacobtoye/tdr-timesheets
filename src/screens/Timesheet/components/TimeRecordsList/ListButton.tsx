import styled from '@emotion/styled-base';
import { theme } from 'utils/theme';

interface ListButtonProps {
  color: string;
  boxShadow: string;
}

export const ListButton = styled<'div', ListButtonProps>('div')`
  align-items: center;
  background-color: ${({ color }: ListButtonProps) => color};
  border-radius: ${theme.grid.BASELINE * 3}px;
  box-shadow: ${({ boxShadow }: ListButtonProps) => boxShadow};
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  height: ${theme.grid.BASELINE * 6}px;
  justify-content: center;
  width: ${theme.grid.BASELINE * 6}px;
`;
