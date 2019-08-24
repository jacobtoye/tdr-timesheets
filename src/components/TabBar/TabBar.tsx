import * as React from 'react';
import styled from '@emotion/styled';

const TabBarContainer = styled('div')`
  background-color: #ffffff;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  height: 48px;
  width: 100vw;
  padding: 0 16px;
`;

interface TabProps {
  selected?: boolean;
}

const Tab = styled('div')<TabProps>`
  align-items: center;
  border-bottom: 2px solid #e0dce0;
  border-bottom-color: #e0dce0;
  border-bottom-style: solid;
  border-bottom-width: ${({ selected = false }: TabProps) => (selected ? '2px' : '0')};
  color: ${({ selected = false }: TabProps) => (selected ? '#666666' : '#cccccc')};
  display: flex;
  font-size: 12px;
  height: 100%;
  padding: 0 8px;
  word-break: keep-all;
`;

interface TabBarProps {
  children?: JSX.Element;
}

export const TabBar: React.FC<TabBarProps> = ({ children }: TabBarProps) => {
  return (
    <TabBarContainer>
      <Tab>Timesheet</Tab>
      <Tab selected={true}>Leave</Tab>
      <Tab>Bonus</Tab>
      <Tab>TODOs</Tab>
    </TabBarContainer>
  );
};

export default TabBar;
