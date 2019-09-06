import * as React from 'react';
import styled from '@emotion/styled';
import format from 'date-fns/format';
import TimePeriodType from 'models/TimePeriodType';
import { theme } from 'utils/theme';
import { PeriodTypeIcon } from './PeriodTypeIcon';

const TimeRecordWrapper = styled('div')`
  align-items: center;
  display: grid;
  grid-gap: 0 ${theme.grid.GUTTER}px;
  grid-template-columns: ${theme.grid.COLUMN}px auto;
  height: ${theme.grid.BASELINE * 6}px;
  margin-bottom: ${theme.grid.BASELINE * 3}px;

  &:last-child {
    margin-bottom: 0;
  }
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

interface TimeRecordProps {
  startTime: number;
  endTime: number;
  type: TimePeriodType;
}

export const TimeRecord: React.FC<TimeRecordProps> = ({ startTime, endTime, type }: TimeRecordProps) => {
  return (
    <TimeRecordWrapper>
      <PeriodTypeIcon type={type} />
      <TimePeriod>
        {format(startTime, 'h:mm aa')} - {format(endTime, 'h:mm aa')}
      </TimePeriod>
      <TimePeriodTotal>5:21 (TODO)</TimePeriodTotal>
    </TimeRecordWrapper>
  );
};
