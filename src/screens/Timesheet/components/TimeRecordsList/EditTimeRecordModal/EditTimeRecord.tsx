import * as React from 'react';
import styled from '@emotion/styled-base';
import { InlineCalendar } from 'components';
import { theme, timeRecordTypeAsColor } from 'utils/theme';
import TimeRecordType from 'models/TimeRecordType';

const TimeTypeSwitcher = styled('div')`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${theme.grid.GUTTER}px;
  height: ${theme.grid.BASELINE * 5}px;
  justify-items: center;
  margin-bottom: ${theme.grid.BASELINE * 2}px;
`;

interface TimeTypeButtonProps {
  isSelected: boolean;
  timeRecordType: TimeRecordType;
}

const TimeTypeButton = styled<'div', TimeTypeButtonProps>('div')`
  align-items: center;
  background-color: ${(props: TimeTypeButtonProps) =>
    timeRecordTypeAsColor(props.timeRecordType) + (props.isSelected ? '' : '80')};
  border-radius: ${(theme.grid.BASELINE * 5) / 2}px;
  color: white;
  display: flex;
  font-size: ${theme.text.button.SIZE}px;
  height: ${theme.grid.BASELINE * 5}px;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
`;

const TimePeriodContainer = styled('div')`
  align-content: center;
  display: grid;
  grid-gap: 7px;
  grid-template-columns: auto ${theme.grid.COLUMN * 2}px auto;
  height: ${theme.grid.BASELINE * 7}px;
  justify-items: center;
  margin-bottom: ${theme.grid.BASELINE * 2}px;
`;

const TimeLabel = styled('div')`
  align-content: center;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
`;

const DateLabel = styled('span')`
  color: ${theme.palette.text.SECONDARY};
  font-size: ${theme.text.body2.SIZE}px;
  height: ${theme.text.body2.LINE_HEIGHT}px;
`;

const TimeInput = styled('input')`
  -webkit-appearance: none;
  -webkit-min-logical-width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 0;
  color: ${theme.palette.text.PRIMARY};
  font-family: 'Inter', system-ui, sans-serif;
  font-size: ${theme.text.body.SIZE}px;
  height: ${theme.text.body.LINE_HEIGHT}px;
  line-height: ${theme.text.body.LINE_HEIGHT}px;
  padding: 0;
`;

export const EditTimeRecord: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <TimeTypeSwitcher>
        <TimeTypeButton isSelected={true} timeRecordType={TimeRecordType.Normal}>
          {TimeRecordType.Normal}
        </TimeTypeButton>
        <TimeTypeButton isSelected={false} timeRecordType={TimeRecordType.Training}>
          {TimeRecordType.Training}
        </TimeTypeButton>
      </TimeTypeSwitcher>
      <TimePeriodContainer>
        <TimeLabel>
          <TimeInput type="time" value="08:30" />
          <DateLabel>09/09</DateLabel>
        </TimeLabel>
        <div>to</div>
        <TimeLabel>
          <TimeInput type="time" value="12:30" />
          <DateLabel>09/09</DateLabel>
        </TimeLabel>
      </TimePeriodContainer>
      <InlineCalendar />
    </React.Fragment>
  );
};
