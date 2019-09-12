import * as React from 'react';
import styled from '@emotion/styled';
import TimeRecordType from 'models/TimeRecordType';
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
  const timeRecordTypeTotals: Record<TimeRecordType, number> = {
    [TimeRecordType.Normal]: 0,
    [TimeRecordType.AnnualLeave]: 0,
    [TimeRecordType.Sick]: 0,
    [TimeRecordType.Training]: 0,
    [TimeRecordType.Stat]: 0,
  };
  Object.keys(timesheetState.dayRecords).forEach(key => {
    const day = timesheetState.dayRecords[key];
    totalDuration += day.durationInMilliseconds;

    for (const [type, duration] of Object.entries(day.timeRecordTypeTotals)) {
      timeRecordTypeTotals[type as TimeRecordType] += duration;
    }
  });

  return (
    <PeriodTotalsContainer>
      <TotalHeader>
        This period: <strong>{toTimeString(duration(totalDuration), true)}</strong>
      </TotalHeader>
      <Totals>
        {Object.entries(timeRecordTypeTotals).map(([type, duration]) => (
          <Total
            percent={Math.round((duration / totalDuration) * 100)}
            timeRecordType={type as TimeRecordType}
            key={type}
          >
            {type}
          </Total>
        ))}
      </Totals>
    </PeriodTotalsContainer>
  );
};
