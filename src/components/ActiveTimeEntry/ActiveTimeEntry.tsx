import * as React from 'react';
import styled from '@emotion/styled';
import DeleteButton from './DeleteButton';
import IconsContainer from './IconsContainer';
import StopButton from './StopButton';
import TimePeriodLabel from './TimePeriodLabel';
import Timer from './Timer';
import { useTimesheetContext } from '../../screens/Timesheet/TimesheetContext';

const ActiveTimeEntryWrapper = styled('div')`
  background: linear-gradient(0.5turn, #7f4875, #4f2f4f);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100vw;
`;

const ActiveTimeEntry: React.FC<{}> = () => {
  const { timesheetState, endPeriod, deletePeriod } = useTimesheetContext();

  if (!timesheetState.activePeriod) {
    return null;
  }

  return (
    <ActiveTimeEntryWrapper>
      <TimePeriodLabel period={timesheetState.activePeriod} />
      <Timer startTime={timesheetState.activePeriod.start} />
      <IconsContainer>
        <StopButton period={timesheetState.activePeriod} endPeriod={endPeriod} />
        <DeleteButton period={timesheetState.activePeriod} deletePeriod={deletePeriod} />
      </IconsContainer>
    </ActiveTimeEntryWrapper>
  );
};

export default ActiveTimeEntry;
