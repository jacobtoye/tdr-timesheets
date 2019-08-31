import * as React from 'react';
import styled from '@emotion/styled';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import format from 'date-fns/format';
import { FaRegClock } from 'react-icons/fa';
import { ListRowContainer, ListRowIcon } from '../../../../components';

const ClockIcon = styled(FaRegClock)`
  color: #ad92ad;
`;

const ListRowContentContainer = styled('div')`
  align-items: center;
  display: flex;
  height: 48px;
  padding: 8px 0;
`;

const Period = styled('div')`
  flex-grow: 1;
`;

const Total = styled('div')`
  color: #6c3e66;
  font-weight: 600;
  padding-right: 16px;
`;

interface TimeEntryProps {
  start: number;
  end: number;
}

const TimeEntry: React.FC<TimeEntryProps> = ({ start, end }: TimeEntryProps) => {
  const startTime = new Date(start);
  const endTime = new Date(end);
  // TODO: move this to a util. Also used in <Timer />
  const hours = Math.abs(differenceInHours(endTime, startTime));
  const minutes = Math.abs(differenceInMinutes(endTime, startTime)) % 60;
  const seconds = Math.abs(differenceInSeconds(endTime, startTime)) % 60;

  return (
    <ListRowContainer>
      <ListRowIcon>
        <ClockIcon />
      </ListRowIcon>
      <ListRowContentContainer>
        <Period>
          {format(startTime, 'h:mm aaaa')} - {format(endTime, 'h:mm aaaa')}
        </Period>
        <Total>
          {('00' + hours).slice(-2)}:{('00' + minutes).slice(-2)}:{('00' + seconds).slice(-2)}
        </Total>
      </ListRowContentContainer>
    </ListRowContainer>
  );
};

export default TimeEntry;
