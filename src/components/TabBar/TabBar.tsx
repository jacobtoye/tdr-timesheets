import * as React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { AuthedRoutes, RouteConfig } from '../Router';

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
  activeClassName: string;
}

const activeClassName = 'nav-item-active';

const Tab = styled(NavLink)<TabProps>`
  align-items: center;
  border-bottom: 2px solid #e0dce0;
  border-bottom-color: #ffffff;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  color: #cccccc;
  display: flex;
  font-size: 12px;
  height: 100%;
  padding: 0 8px;
  text-decoration: none;
  word-break: keep-all;

  &.${activeClassName}, &:hover {
    border-bottom-color: #e0dce0;
    color: #666666;
  }
`;

const TabBar: React.FC<{}> = () => {
  return (
    <TabBarContainer>
      {AuthedRoutes.map(({ path, name }: RouteConfig) => (
        <Tab key={path} to={path} activeClassName={activeClassName}>
          {name}
        </Tab>
      ))}
    </TabBarContainer>
  );
};

export default TabBar;
