import styled from '@emotion/styled';
import TimePeriodType from 'models/TimePeriodType';
import { timePeriodTypeAsColor } from 'utils/theme';

interface IconProps {
  type: TimePeriodType;
}

export const PeriodTypeIcon = styled<'div', IconProps>('div')`
  background-color: ${(props: IconProps) => timePeriodTypeAsColor(props.type)};
  border-radius: 5px;
  height: 10px;
  justify-self: center;
  width: 10px;
`;
