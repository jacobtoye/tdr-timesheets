import * as React from 'react';
import styled from '@emotion/styled';
import DeleteButton from './DeleteButton';
import IconsContainer from './IconsContainer';
import StopButton from './StopButton';
import TimePeriod from './TimePeriod';
import Timer from './Timer';

const ActiveTimeEntryWrapper = styled('div')`
  background-color: #4f2f4f;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100vw;
`;

const ActiveTimeEntry: React.FC<{}> = () => {
  // TODO: pull the appropriate stuff from app state
  // TimePeriod: start time
  // Timer: start time
  // StopButton: onClick -> stop period
  // DeleteButton: onClick -> delete period
  return (
    <ActiveTimeEntryWrapper>
      <TimePeriod />
      <Timer />
      <IconsContainer>
        <StopButton />
        <DeleteButton />
      </IconsContainer>
    </ActiveTimeEntryWrapper>
  );
};

export default ActiveTimeEntry;
