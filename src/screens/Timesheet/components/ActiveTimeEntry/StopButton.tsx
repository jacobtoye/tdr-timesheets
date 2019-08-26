import * as React from 'react';
import styled from '@emotion/styled';
import { FaStop } from 'react-icons/fa';
import IconBorder from './IconBorder';
import IconSizingContainer from './IconSizingContainer';

const StopIconBorder = styled(IconBorder)`
  border: 3px solid white;
  border-radius: 24px;
  width: 48px;
  height: 48px;
`;

const StopIcon = styled(FaStop)`
  color: #ffffff;
  font-size: 18px;
`;

const StopButton: React.FC<{}> = () => {
  return (
    <IconSizingContainer>
      <StopIconBorder>
        <StopIcon />
      </StopIconBorder>
    </IconSizingContainer>
  );
};

export default StopButton;
