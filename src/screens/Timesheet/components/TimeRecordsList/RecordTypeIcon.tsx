import styled from '@emotion/styled';
import TimeRecordType from 'models/TimeRecordType';
import { timeRecordTypeAsColor } from 'utils/theme';

interface IconProps {
  type: TimeRecordType;
}

export const RecordTypeIcon = styled<'div', IconProps>('div')`
  background-color: ${(props: IconProps) => timeRecordTypeAsColor(props.type)};
  border-radius: 5px;
  height: 10px;
  justify-self: center;
  width: 10px;
`;
