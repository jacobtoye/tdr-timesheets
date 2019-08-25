import * as React from 'react';
import styled from '@emotion/styled';
import { FaStop, FaTrash } from 'react-icons/fa';

const TimesheetScreenWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`;

const ActiveTimeEntry = styled('div')`
  background-color: #4f2f4f;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 100vw;
`;

const CenteredItemsContainer = styled('div')`
  align-items: center;
  display: flex;
  grid-gap: 16px;
  justify-content: center;
`;

const ShiftTimeText = styled('div')`
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  font-size: 12px;
  height: 24px;

  &:first-child {
    justify-self: end;
  }

  &:last-child {
    justify-self: start;
  }
`;

const ShiftSeperator = styled(ShiftTimeText)``;

const Timer = styled(CenteredItemsContainer)`
  font-size: 18px;
  height: 32px;
`;

const IconContainer = styled(CenteredItemsContainer)`
  grid-gap: 32px;
  height: 48px;
  margin: 8px 0;
`;

const IconBorder = styled('div')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const StopIconBorder = styled(IconBorder)`
  border: 3px solid white;
  border-radius: 24px;
  width: 34px;
  height: 34px;
`;

const StopIcon = styled(FaStop)`
  color: #ffffff;
  font-size: 12px;
`;

// TODO: because this is smaller than the stop icon the positioning will be a little off, need to fix it
const DeleteIconBorder = styled(IconBorder)`
  border: 2px solid #ea3f45;
  border-radius: 16px;
  width: 28px;
  height: 28px;
`;

const DeleteIcon = styled(FaTrash)`
  color: #ea3f45;
  font-size: 9px;
`;

const TimesheetScreen: React.FC<{}> = () => {
  const now = new Date();

  return (
    <TimesheetScreenWrapper>
      <ActiveTimeEntry>
        <CenteredItemsContainer>
          <ShiftTimeText>08:32 AM</ShiftTimeText>
          <ShiftSeperator>-</ShiftSeperator>
          <ShiftTimeText>12:12 PM</ShiftTimeText>
        </CenteredItemsContainer>
        <Timer>
          {now.getHours()} hrs : {now.getMinutes()} mins : {now.getSeconds()} secs
        </Timer>
        <IconContainer>
          <StopIconBorder>
            <StopIcon />
          </StopIconBorder>
          <DeleteIconBorder>
            <DeleteIcon />
          </DeleteIconBorder>
        </IconContainer>
      </ActiveTimeEntry>
    </TimesheetScreenWrapper>
  );
};

export default TimesheetScreen;
