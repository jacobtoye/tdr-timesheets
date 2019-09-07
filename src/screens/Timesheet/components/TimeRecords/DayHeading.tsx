import * as React from 'react';
import styled from '@emotion/styled';
import format from 'date-fns/format';
import { isToday, isYesterday } from 'date-fns/esm';
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

const calculatePeriodsTotal = (periods: TimePeriod[]) => {
  let total = 0;
  periods.forEach((period: TimePeriod) => {
    total += period.end - period.start;
  });

  return total;
};

const getDayText = (date: number) => {
  if (isToday(date)) {
    return 'Today';
  } else if (isYesterday(date)) {
    return 'Yesterday';
  }

  return format(date, 'EEE, dd MMM');
};

interface DayHeadingProps {
  periods: TimePeriod[];
}

export const DayHeading: React.FC<DayHeadingProps> = ({ periods }: DayHeadingProps) => {
  if (periods.length === 0) {
    return null;
  }

  const totalDuration = duration(calculatePeriodsTotal(periods));

  return (
    <DayHeadingWrapper>
      {getDayText(periods[0].start)} -&nbsp;<strong>{toTimeString(totalDuration)}</strong>
    </DayHeadingWrapper>
  );
};
