import * as React from 'react';
import styled from '@emotion/styled';
import format from 'date-fns/format';
import { isToday, isYesterday } from 'date-fns/esm';
import { DayRecord } from 'contexts/TimesheetContext/TimesheetContext';
import { CenteredContent } from 'components';
import { theme } from 'utils/theme';
import { duration, toTimeString } from 'utils/time';

const DayHeadingWrapper = styled(CenteredContent)`
  border-bottom: 2px solid ${theme.palette.GREY};
  color: ${theme.palette.text.SECONDARY};
  flex-direction: initial;
  font-size: ${theme.text.body2}px;
  height: ${theme.grid.BASELINE * 11}px;
  width: 100%;
`;

const getDayText = (date: number) => {
  if (isToday(date)) {
    return 'Today';
  } else if (isYesterday(date)) {
    return 'Yesterday';
  }

  return format(date, 'EEE, dd MMM');
};

interface DayHeadingProps {
  day: DayRecord;
}

export const DayHeading: React.FC<DayHeadingProps> = ({ day }: DayHeadingProps) => {
  if (day.timeRecords.length === 0) {
    return null;
  }

  const totalDuration = duration(day.durationInMilliseconds);

  return (
    <DayHeadingWrapper>
      {getDayText(day.timeRecords[0].start)} -&nbsp;<strong>{toTimeString(totalDuration)}</strong>
    </DayHeadingWrapper>
  );
};
