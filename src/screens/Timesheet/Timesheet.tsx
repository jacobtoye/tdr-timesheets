import * as React from 'react';
import styled from '@emotion/styled';
import { FaTrashAlt, FaBars } from 'react-icons/fa';
import { PeriodTotals, Timer, TimeRecordsList } from './components';
import { BaseScreen, CenteredContent } from 'components';
import { theme } from 'utils/theme';

const HeaderContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: ${theme.grid.BASELINE * 7}px;
`;

const HeaderButton = styled(CenteredContent)`
  color: ${theme.palette.text.GREY};
  font-size: 18px;
  height: ${theme.grid.BASELINE * 7}px;
  width: ${theme.grid.COLUMN}px;
`;

const LeftButton = styled(HeaderButton)`
  justify-self: start;
`;

const RightButton = styled(HeaderButton)`
  justify-self: end;
`;

export const TimesheetScreen: React.FC<{}> = () => {
  return (
    <BaseScreen>
      <HeaderContainer>
        <LeftButton>
          <FaBars />
        </LeftButton>
        <RightButton>
          <FaTrashAlt />
        </RightButton>
      </HeaderContainer>
      <Timer />
      <PeriodTotals />
      <TimeRecordsList />
    </BaseScreen>
  );
};
