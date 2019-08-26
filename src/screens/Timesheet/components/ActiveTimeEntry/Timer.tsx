import * as React from 'react';
import styled from '@emotion/styled';
import CenteredItemsContainer from './CenteredItemsContainer';

const TimerContainer = styled(CenteredItemsContainer)`
  font-size: 18px;
  height: 32px;
`;

const Timer: React.FC<{}> = () => {
  const now = new Date();

  return (
    <TimerContainer>
      {now.getHours()} hrs : {now.getMinutes()} mins : {now.getSeconds()} secs
    </TimerContainer>
  );
};

export default Timer;
