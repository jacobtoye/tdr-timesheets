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
import { theme } from 'utils/theme';

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
    box-shadow: 0 0 0 10px rgba(223, 114, 157, 0), inset 0 0 0 6px rgba(223, 114, 157, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(223, 114, 157, 0), inset 0 0 0 0 rgba(223, 114, 157, 0);
  }
}`;

const TimerCircle = styled(CenteredContent)`
  animation: ${pulse} 3s ease infinite;
  border: 7px solid ${theme.palette.primaryColors.PINK};
  border-radius: 115px;
  height: 229px;
  width: 229px;
`;

const TimeLabel = styled('div')`
  font-size: ${theme.text.h1.SIZE}px;
  height: ${theme.text.h1.LINE_HEIGHT}px;
  line-height: ${theme.text.h1.LINE_HEIGHT}px;
`;

const StartTimeLabel = styled('div')`
  color: ${theme.palette.text.SECONDARY};
  font-size: ${theme.text.body.SIZE}px;
  height: ${theme.text.body.LINE_HEIGHT}px;
  line-height: ${theme.text.body.LINE_HEIGHT}px;
`;

const TimerButtonContainer = styled(CenteredContent)`
  background-color: ${theme.palette.background.MAIN};
  border-radius: 55px;
  margin-top: -55px;
  height: 109px;
  width: 109px;
`;

const TimerButton = styled(CenteredContent)`
  background-color: ${theme.palette.background.DARK};
  border-radius: 40px;
  height: 77px;
  width: 77px;
`;

const StopIcon = styled(FaStop)`
  color: ${theme.palette.text.PRIMARY};
  font-size: 22px;
`;

const StartIcon = styled(FaPlay)`
  color: ${theme.palette.text.PRIMARY};
  font-size: 22px;
`;

// TODO: move
const formatTime = (time: number, now: number) => {
  const timeAsDate = new Date(time);
  const nowDate = new Date(now);
  const hours = Math.abs(differenceInHours(timeAsDate, nowDate));
  const minutes = Math.abs(differenceInMinutes(timeAsDate, nowDate)) % 60;
  const seconds = Math.abs(differenceInSeconds(timeAsDate, nowDate)) % 60;

  return `${('00' + hours).slice(-2)}:${('00' + minutes).slice(-2)}:${('00' + seconds).slice(-2)}`;
};

export const Timer: React.FC<{}> = () => {
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
            <TimeLabel>---</TimeLabel>
            <StartTimeLabel>Not started</StartTimeLabel>
          </Fragment>
        )}
      </TimerCircle>
      <TimerButtonContainer>
        <TimerButton onClick={startPeriod}>{timesheetState.activePeriod ? <StopIcon /> : <StartIcon />}</TimerButton>
      </TimerButtonContainer>
    </TimerContainer>
  );
};
