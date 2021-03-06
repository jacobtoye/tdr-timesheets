import * as React from 'react';
import styled from '@emotion/styled';
import { FaPlay, FaStop } from 'react-icons/fa';
import { CenteredContent } from 'components';
import { useTimesheetContext } from 'contexts/TimesheetContext';
import { theme } from 'utils/theme';
import { TimerCircle } from './TimerCircle';

// TODO: what could be cool is to have the ability to choose the type of time (Normal / leave/ etc)
// and have the color of the circle be that colour
const TimerContainer = styled(CenteredContent)`
  margin-bottom: 21px;
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

export const Timer: React.FC<{}> = () => {
  const { timesheetState, startActiveRecord, endActiveRecord } = useTimesheetContext();
  const activeRecord = timesheetState.activeRecord;

  const onClick = () => {
    if (activeRecord) {
      endActiveRecord();
      return;
    }

    startActiveRecord();
  };

  return (
    <TimerContainer>
      <TimerCircle activeRecord={activeRecord} />
      <TimerButtonContainer>
        <TimerButton onClick={onClick}>{activeRecord ? <StopIcon /> : <StartIcon />}</TimerButton>
      </TimerButtonContainer>
    </TimerContainer>
  );
};
