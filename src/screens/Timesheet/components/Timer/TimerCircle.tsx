import React, { Fragment, useState } from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { CenteredContent } from 'components';
import { theme } from 'utils/theme';
import { ActiveTimeRecord } from 'contexts/TimesheetContext/TimesheetContext';
import useInterval from 'hooks/useInterval';
import format from 'date-fns/esm/format';
import { duration, toTimeString } from 'utils/time';

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

const TimerCircleContainer = styled(CenteredContent)`
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

interface TimerCircleProps {
  activeRecord?: ActiveTimeRecord;
}

export const TimerCircle: React.FC<TimerCircleProps> = ({ activeRecord }: TimerCircleProps) => {
  const [now, setNow] = useState(Date.now());

  useInterval(() => {
    setNow(Date.now());
  }, 1000);

  return (
    <TimerCircleContainer>
      {activeRecord ? (
        <Fragment>
          <TimeLabel>{toTimeString(duration(now - activeRecord.start), true)}</TimeLabel>
          <StartTimeLabel>Started @ {format(activeRecord.start, 'h:mm aa')}</StartTimeLabel>
        </Fragment>
      ) : (
        <Fragment>
          <TimeLabel>---</TimeLabel>
          <StartTimeLabel>Not started</StartTimeLabel>
        </Fragment>
      )}
    </TimerCircleContainer>
  );
};
