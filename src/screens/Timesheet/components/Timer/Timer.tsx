import React, { Fragment, useState } from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { FaPlay, FaStop } from 'react-icons/fa';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import format from 'date-fns/format';
import { CenteredContent } from 'components';
import useInterval from 'hooks/useInterval';
import { useTimesheetContext } from '../../TimesheetContext';

// TODO: what could be cool is to have the ability to choose the type of time (Normal / leave/ etc)
// and have the color of the circle be that colour
const TimerContainer = styled(CenteredContent)`
  margin-bottom: 21px;
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(223, 114, 157, 0.6), inset 0 0 0 0 rgba(223, 114, 157, 0.6);
  }
  80% {
    box-shadow: 0 0 0 10px rgba(223, 114, 157, 0), inset 0 0 0 4px rgba(223, 114, 157, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(223, 114, 157, 0), inset 0 0 0 0 rgba(223, 114, 157, 0);
  }
}`;

const TimerCircle = styled(CenteredContent)`
  animation: ${pulse} 3s ease infinite;
  border: 7px solid #df729d;
  border-radius: 115px;
  height: 229px;
  width: 229px;
`;

const TimeLabel = styled('div')`
  font-size: 2rem;
  height: 42px;
  line-height: 42px;
`;

const StartTimeLabel = styled('div')`
  color: #b3ada7;
  height: 21px;
  line-height: 21px;
  margin-top: 7px;
`;

const TimerButton = styled(CenteredContent)`
  background-color: #fdf7f1;
  border-radius: 44px;
  margin-top: -55px;
  height: 109px;
  width: 109px;
`;

const StopIcon = styled(FaStop)`
  color: #655f59;
  font-size: 24px;
`;

const StartIcon = styled(FaPlay)`
  color: #655f59;
  font-size: 24px;
`;

const formatTime = (time: number, now: number) => {
  const timeAsDate = new Date(time);
  const nowDate = new Date(now);
  const hours = Math.abs(differenceInHours(timeAsDate, nowDate));
  const minutes = Math.abs(differenceInMinutes(timeAsDate, nowDate)) % 60;
  const seconds = Math.abs(differenceInSeconds(timeAsDate, nowDate)) % 60;

  return `${('00' + hours).slice(-2)}:${('00' + minutes).slice(-2)}:${('00' + seconds).slice(-2)}`;
};

const Timer: React.FC<{}> = () => {
  const { timesheetState, startPeriod, endPeriod } = useTimesheetContext();
  const [now, setNow] = useState(Date.now());

  useInterval(() => {
    setNow(Date.now());
  }, 1000);

  return (
    <TimerContainer>
      <TimerCircle>
        {timesheetState.activePeriod ? (
          <Fragment>
            <TimeLabel>{formatTime(timesheetState.activePeriod.start, now)}</TimeLabel>
            <StartTimeLabel>Started @ {format(timesheetState.activePeriod.start, 'h:mm aa')}</StartTimeLabel>
          </Fragment>
        ) : (
          <Fragment>
            <TimeLabel>--:--:--</TimeLabel>
            <StartTimeLabel>Not started</StartTimeLabel>
          </Fragment>
        )}
      </TimerCircle>
      <TimerButton onClick={startPeriod}>{timesheetState.activePeriod ? <StopIcon /> : <StartIcon />}</TimerButton>
    </TimerContainer>
  );
};

export default Timer;
