import * as React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  align-items: center;
  color: #704270;
  display: flex;
  flex-direction: column;
  font-size: 32px;
  height: 100vh;
  padding-top: 120px;
  width: 100vw;
`;

const BonusScreen: React.FC<{}> = () => {
  return <Wrapper>Bonus</Wrapper>;
};

export default BonusScreen;
