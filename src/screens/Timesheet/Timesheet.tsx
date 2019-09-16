import * as React from 'react';
import { FaTrashAlt, FaBars } from 'react-icons/fa';
import { PeriodTotals, Timer, TimeRecordsList } from './components';
import { BaseScreen, Header, HeaderButton } from 'components';

export const TimesheetScreen: React.FC<{}> = () => {
  // TODO: move header out and fix the <div />
  return (
    <BaseScreen>
      <Header>
        <HeaderButton>
          <FaBars />
        </HeaderButton>
        <div />
        <HeaderButton>
          <FaTrashAlt />
        </HeaderButton>
      </Header>
      <Timer />
      <PeriodTotals />
      <TimeRecordsList />
    </BaseScreen>
  );
};
