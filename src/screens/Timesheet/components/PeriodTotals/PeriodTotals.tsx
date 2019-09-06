import * as React from 'react';
import styled from '@emotion/styled';
import TimePeriodType from 'models/TimePeriodType';
import { Total } from './Total';

const PeriodTotalsContainer = styled('div')`
  padding: 0 13px;
`;

const TotalHeader = styled('div')`
  font-size: 14px;
  height: 14px;
  line-height: 14px;
`;

const Totals = styled('div')`
  display: flex;
  width: 100%;
`;

// TODO: pass in state and work out each total
const PeriodTotals: React.FC<{}> = () => {
  return (
    <PeriodTotalsContainer>
      <TotalHeader>Fortnight: 77:31</TotalHeader>
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

export default PeriodTotals;
