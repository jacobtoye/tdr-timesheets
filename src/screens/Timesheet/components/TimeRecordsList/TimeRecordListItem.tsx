import * as React from 'react';
import styled from '@emotion/styled';
import format from 'date-fns/format';
import Swipeout from 'rc-swipeout';
import TimeRecordType from 'models/TimeRecordType';
import { theme, timeRecordTypeAsColor } from 'utils/theme';
import { RecordTypeIcon } from './RecordTypeIcon';
import { toTimeString, duration } from 'utils/time';
import { DeleteButton } from './DeleteButton';
import { EditButton } from './EditButton';
import { EditTimeRecordModal } from './EditTimeRecordModal';
import useModal from 'hooks/useModal';

// Need to do this so rc-swipeout workds :\
import 'rc-swipeout/assets/index.css';

const TimeRecordWrapper = styled('div')`
  align-items: center;
  background-color: ${theme.palette.background.MAIN};
  display: grid;
  grid-gap: 0 ${theme.grid.GUTTER}px;
  grid-template-columns: ${theme.grid.COLUMN}px auto;
  height: ${theme.grid.BASELINE * 8}px;
  padding: ${theme.grid.BASELINE}px 0;
`;

const TimePeriod = styled('div')`
  height: ${theme.text.body.LINE_HEIGHT}px;
  line-height: ${theme.text.body.LINE_HEIGHT}px;
`;

const TimePeriodTotal = styled('div')`
  color: ${theme.palette.text.GREY};
  font-size: ${theme.text.body2.SIZE}px;
  grid-column-start: 2;
  grid-column-end: 2;
  height: ${theme.text.body2.LINE_HEIGHT}px;
  line-height: ${theme.text.body2.LINE_HEIGHT}px;
`;

// TODO: should jsut pass in the TimeRecordssss
interface TimeRecordProps {
  id: number;
  startTime: number;
  endTime: number;
  type: TimeRecordType;
  deleteRecord: (id: number) => void;
}

export const TimeRecordListItem: React.FC<TimeRecordProps> = ({
  id,
  startTime,
  endTime,
  type,
  deleteRecord,
}: TimeRecordProps) => {
  const { isShowing, toggle } = useModal();

  const onDeleteClick = () => {
    deleteRecord(id);
  };

  const onEditClick = () => {
    toggle();
  };

  return (
    <Swipeout
      style={{ marginBottom: `${theme.grid.BASELINE * 3}px` }}
      autoClose
      left={[
        {
          text: <EditButton color={timeRecordTypeAsColor(type)} />,
          onPress: onEditClick,
        },
      ]}
      right={[
        {
          text: <DeleteButton />,
          onPress: onDeleteClick,
        },
      ]}
    >
      <TimeRecordWrapper>
        <RecordTypeIcon type={type} />
        <TimePeriod>
          {format(startTime, 'h:mm aa')} - {format(endTime, 'h:mm aa')}
        </TimePeriod>
        <TimePeriodTotal>{toTimeString(duration(endTime - startTime))}</TimePeriodTotal>
      </TimeRecordWrapper>
      <EditTimeRecordModal isShowing={isShowing} timeRecordId={id} toggle={toggle} />
    </Swipeout>
  );
};
