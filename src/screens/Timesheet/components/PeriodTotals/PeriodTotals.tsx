import * as React from 'react';
import styled from '@emotion/styled';
import TimePeriodType from 'models/TimePeriodType';
import { Total } from './Total';
import { theme } from 'utils/theme';

const PeriodTotalsContainer = styled('div')``;

const TotalHeader = styled('div')`
  font-size: ${theme.text.body2.SIZE}px;
  height: ${theme.text.body2.LINE_HEIGHT}px;
  line-height: ${theme.text.body2.LINE_HEIGHT}px;
`;

const Totals = styled('div')`
  display: flex;
  width: 100%;
`;

// TODO: pass in state and work out each total
export const PeriodTotals: React.FC<{}> = () => {
  return (
    <PeriodTotalsContainer>
      <TotalHeader>
        Fortnight: <strong>77:31</strong>
      </TotalHeader>
      <Totals>
        <Total percent={91} timePeriodType={TimePeriodType.Normal}>
          {TimePeriodType.Normal}
        </Total>
        <Total percent={7} timePeriodType={TimePeriodType.Training}>
          {TimePeriodType.Training}
        </Total>
        <Total percent={2} timePeriodType={TimePeriodType.AnnualLeave}>
          {TimePeriodType.AnnualLeave}
        </Total>
      </Totals>
    </PeriodTotalsContainer>
  );
};
