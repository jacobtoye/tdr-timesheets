import * as React from 'react';
import styled from '@emotion/styled';
import { FaTrashAlt, FaBars } from 'react-icons/fa';
import { PeriodTotals, Timer, TimeRecords } from './components';
import { BaseScreen, CenteredContent } from 'components';
import { useTimesheetContext } from './TimesheetContext';

const HeaderContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 63px;
  padding: 14px 13px 0 13px;
  width: 100vw;
`;

const HeaderButton = styled(CenteredContent)`
  height: 49px;
  width: 49px;
`;

const LeftButton = styled(HeaderButton)`
  justify-self: start;
`;

const RightButton = styled(HeaderButton)`
  justify-self: end;
`;

const MenuIcon = styled(FaBars)`
  color: #b3ada7;
  font-size: 16px;
`;

const TrashIcon = styled(FaTrashAlt)`
  color: #b3ada7;
  font-size: 16px;
`;

const TimesheetScreen: React.FC<{}> = () => {
  const { timesheetState } = useTimesheetContext();

  return (
    <BaseScreen>
      <HeaderContainer>
        <LeftButton>
          <MenuIcon />
        </LeftButton>
        <RightButton>
          <TrashIcon />
        </RightButton>
      </HeaderContainer>
      <Timer />
      <PeriodTotals />
      <TimeRecords />
    </BaseScreen>
  );
};

export default TimesheetScreen;
