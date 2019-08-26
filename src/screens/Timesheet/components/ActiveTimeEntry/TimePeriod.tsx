import * as React from 'react';
import styled from '@emotion/styled';
import CenteredItemsContainer from './CenteredItemsContainer';

const TimeText = styled('div')`
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  font-size: 12px;
  height: 24px;

  &:first-child {
    justify-self: end;
  }

  &:last-child {
    justify-self: start;
  }
`;

const Seperator = styled(TimeText)``;

const TimePeriod: React.FC<{}> = () => {
  return (
    <CenteredItemsContainer>
      <TimeText>08:32 AM</TimeText>
      <Seperator>-</Seperator>
      <TimeText>12:12 PM</TimeText>
    </CenteredItemsContainer>
  );
};

export default TimePeriod;
