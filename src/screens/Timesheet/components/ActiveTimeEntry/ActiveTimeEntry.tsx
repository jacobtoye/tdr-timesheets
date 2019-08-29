import * as React from 'react';
import styled from '@emotion/styled';
import DeleteButton from './DeleteButton';
import IconsContainer from './IconsContainer';
import StopButton from './StopButton';
import TimePeriodLabel from './TimePeriodLabel';
import Timer from './Timer';
import { useTimesheetContext } from '../../TimesheetContext';

const ActiveTimeEntryWrapper = styled('div')`
  background-color: #4f2f4f;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100vw;
`;

const ActiveTimeEntry: React.FC<{}> = () => {
  const { timesheetState, startPeriod, endPeriod, deletePeriod } = useTimesheetContext();

  // TODO: temp to provide ability to start time periods
  if (!timesheetState.activePeriod) {
    return <button onClick={startPeriod}>start</button>;
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
