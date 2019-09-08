import styled from '@emotion/styled-base';
import TimePeriodType from 'models/TimePeriodType';
import { theme, timePeriodTypeAsColor } from 'utils/theme';

interface TotalProps {
  percent: number;
  timePeriodType: TimePeriodType;
}

export const Total = styled<'div', TotalProps>('div')`
  align-items: flex-end;
  border-bottom: 4px solid;
  border-bottom-color: ${(props: TotalProps) => timePeriodTypeAsColor(props.timePeriodType)};
  color: ${theme.palette.text.GREY};
  display: ${(props: TotalProps) => (props.percent > 0 ? 'flex' : 'none')};
  font-size: ${theme.text.overline.SIZE}px;
  height: ${theme.grid.BASELINE * 5}px;
  margin-bottom: 3px;
  padding-left: 2px;
  padding-right: ${theme.grid.GUTTER}px;
  text-transform: uppercase;
  width: ${(props: TotalProps) => props.percent}%;
  min-width: fit-content;
`;
