import styled from '@emotion/styled-base';
import TimePeriodType from 'models/TimePeriodType';
import { theme, timePeriodTypeAsColor } from 'utils/theme';

interface TotalProps {
  percent: number;
  timePeriodType: TimePeriodType;
}

const Total = styled<'div', TotalProps>('div')`
  align-items: flex-end;
  border-bottom: 4px solid;
  border-bottom-color: ${(props: TotalProps) => timePeriodTypeAsColor(props.timePeriodType)};
  color: #b3ada7;
  display: flex;
  font-size: 10px;
  height: ${theme.grid.BASELINE * 7}px;
  margin-bottom: 3px;
  padding-left: 3px;
  padding-right: ${theme.grid.GUTTER}px;
  text-transform: uppercase;
  width: ${(props: TotalProps) => props.percent}%;
  min-width: fit-content;
`;

export default Total;
