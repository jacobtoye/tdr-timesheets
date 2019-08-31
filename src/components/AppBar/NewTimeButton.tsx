import * as React from 'react';
import styled from '@emotion/styled';
import AppBarButton from './AppBarButton';
import { FaPlay } from 'react-icons/fa';
import { useTimesheetContext } from '../../screens/Timesheet/TimesheetContext';

const PlayIcon = styled(FaPlay)`
  font-size: 14px;
`;

const NewTimeButton: React.FC<{}> = () => {
  const { startPeriod } = useTimesheetContext();

  return (
    <AppBarButton onClick={startPeriod}>
      <PlayIcon />
    </AppBarButton>
  );
};

export default NewTimeButton;
