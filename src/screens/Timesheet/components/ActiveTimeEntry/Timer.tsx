import React, { useState } from 'react';
import styled from '@emotion/styled';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import useInterval from '../../../../hooks/useInterval';
import CenteredItemsContainer from './CenteredItemsContainer';

const TimerContainer = styled(CenteredItemsContainer)`
  font-size: 18px;
  height: 32px;
`;

interface TimerProps {
  startTime: number;
}

const Timer: React.FC<TimerProps> = ({ startTime }: TimerProps) => {
  const startTimeAsDate = new Date(startTime);
  const [now, setNow] = useState(Date.now());

  // TODO: this seems a bit hacky, can we not do it nicer?
  const nowDate = new Date(now);
  const hours = Math.abs(differenceInHours(startTimeAsDate, nowDate));
  const minutes = Math.abs(differenceInMinutes(startTimeAsDate, nowDate)) % 60;
  const seconds = Math.abs(differenceInSeconds(startTimeAsDate, nowDate)) % 60;

  useInterval(() => {
    setNow(Date.now());
  }, 1000);

  return (
    <TimerContainer>
      {('00' + hours).slice(-2)} hrs : {('00' + minutes).slice(-2)} mins : {('00' + seconds).slice(-2)} secs
    </TimerContainer>
  );
};

export default Timer;
