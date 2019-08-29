import * as React from 'react';
import styled from '@emotion/styled';
import { FaStop } from 'react-icons/fa';
import IconBorder from './IconBorder';
import IconSizingContainer from './IconSizingContainer';
import { TimePeriod } from '../../TimesheetContext';

const StopIconBorder = styled(IconBorder)`
  border: 3px solid white;
  border-radius: 24px;
  width: 48px;
  height: 48px;
`;

const StopIcon = styled(FaStop)`
  color: #ffffff;
  font-size: 18px;
`;

interface StopButtonProps {
  period: TimePeriod;
  endPeriod: (id: number) => void;
}

const StopButton: React.FC<StopButtonProps> = ({ period, endPeriod }: StopButtonProps) => {
  const onStopClick = (): void => {
    endPeriod(period.id);
  };

  return (
    <IconSizingContainer>
      <StopIconBorder>
        <StopIcon onClick={onStopClick} />
      </StopIconBorder>
    </IconSizingContainer>
  );
};

export default StopButton;