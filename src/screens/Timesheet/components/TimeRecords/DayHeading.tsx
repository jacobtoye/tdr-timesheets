import * as React from 'react';
import styled from '@emotion/styled';
import format from 'date-fns/format';
import { TimePeriod } from 'screens/Timesheet/TimesheetContext';
import { CenteredContent } from 'components';
import { theme } from 'utils/theme';
import { duration, toTimeString } from 'utils/time';

const DayHeadingWrapper = styled(CenteredContent)`
  border-bottom: 1px solid ${theme.palette.GREY};
  color: ${theme.palette.text.SECONDARY};
  flex-direction: initial;
  font-size: ${theme.text.body2}px;
  height: ${theme.grid.BASELINE * 9}px;
  width: 100%;
`;

interface DayHeadingProps {
  periods: TimePeriod[];
}

export const DayHeading: React.FC<DayHeadingProps> = ({ periods }: DayHeadingProps) => {
  if (periods.length === 0) {
    return null;
  }

  let total = 0;
  periods.forEach((period: TimePeriod) => {
    total += period.end - period.start;
  });

  return (
    <DayHeadingWrapper>
      {format(periods[0].start, 'EEE, dd MMM')} -&nbsp;<strong>{toTimeString(duration(total))}</strong>
    </DayHeadingWrapper>
  );
};
