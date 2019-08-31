import * as React from 'react';
import styled from '@emotion/styled';
import format from 'date-fns/format';
import CenteredItemsContainer from './CenteredItemsContainer';
import { TimePeriod } from '../../screens/Timesheet/TimesheetContext';

const TimeText = styled('div')`
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  font-size: 12px;
  height: 24px;
`;

interface TimePeriodProps {
  period: TimePeriod;
}

const TimePeriodLabel: React.FC<TimePeriodProps> = ({ period }: TimePeriodProps) => {
  const startTime = new Date(period.start);
  return (
    <CenteredItemsContainer>
      <TimeText>Started @ {format(startTime, 'hh:mm:ss aa')}</TimeText>
    </CenteredItemsContainer>
  );
};

export default TimePeriodLabel;
