import * as React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  align-items: center;
  color: #704270;
  display: flex;
  flex-direction: column;
  font-size: 32px;
  padding-top: 120px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`;

const LeaveScreen: React.FC<{}> = () => {
  return <Wrapper>Leave</Wrapper>;
};

export default LeaveScreen;
