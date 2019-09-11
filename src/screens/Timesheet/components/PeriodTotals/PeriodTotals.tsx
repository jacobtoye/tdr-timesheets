import * as React from 'react';
import styled from '@emotion/styled';
import TimePeriodType from 'models/TimePeriodType';
import { Total } from './Total';
import { theme } from 'utils/theme';
import { useTimesheetContext } from 'contexts/TimesheetContext';
import { toTimeString, duration } from 'utils/time';

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

export const PeriodTotals: React.FC<{}> = () => {
  const { timesheetState } = useTimesheetContext();

  // TODO: woudl be nice not to have to calculate this with each render
  let totalDuration = 0;
  const timePeriodTypeTotals: Record<TimePeriodType, number> = {
    [TimePeriodType.Normal]: 0,
    [TimePeriodType.AnnualLeave]: 0,
    [TimePeriodType.Sick]: 0,
    [TimePeriodType.Training]: 0,
    [TimePeriodType.Stat]: 0,
  };
  Object.keys(timesheetState.dayRecords).forEach(key => {
    const day = timesheetState.dayRecords[key];
    totalDuration += day.durationInMilliseconds;

    for (const [type, duration] of Object.entries(day.timePeriodTypeTotals)) {
      timePeriodTypeTotals[type as TimePeriodType] += duration;
    }
  });

  return (
    <PeriodTotalsContainer>
      <TotalHeader>
        This period: <strong>{toTimeString(duration(totalDuration), true)}</strong>
      </TotalHeader>
      <Totals>
        {Object.entries(timePeriodTypeTotals).map(([type, duration]) => (
          <Total
            percent={Math.round((duration / totalDuration) * 100)}
            timePeriodType={type as TimePeriodType}
            key={type}
          >
            {type}
          </Total>
        ))}
      </Totals>
    </PeriodTotalsContainer>
  );
};
