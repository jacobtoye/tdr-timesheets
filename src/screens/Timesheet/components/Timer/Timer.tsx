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
  const { timesheetState, startActivePeriod, endActivePeriod } = useTimesheetContext();
  const activePeriod = timesheetState.activeRecord;

  const onClick = () => {
    if (activePeriod) {
      endActivePeriod();
      return;
    }

    startActivePeriod();
  };

  return (
    <TimerContainer>
      <TimerCircle activePeriod={activePeriod} />
      <TimerButtonContainer>
        <TimerButton onClick={onClick}>{activePeriod ? <StopIcon /> : <StartIcon />}</TimerButton>
      </TimerButtonContainer>
    </TimerContainer>
  );
};
