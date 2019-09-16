import * as React from 'react';
import styled from '@emotion/styled';
import { MdCheck, MdClose } from 'react-icons/md';
import { Header, HeaderButton, HeaderText } from 'components';
import { theme } from 'utils/theme';

const ModalHeaderContainer = styled(Header)`
  margin-bottom: ${theme.grid.BASELINE * 5}px;
`;

interface ModalHeaderProps {
  text: string;
  onClose: () => void;
  onSave: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ text, onClose, onSave }) => {
  return (
    <ModalHeaderContainer>
      <HeaderButton onClick={onClose}>
        <MdClose />
      </HeaderButton>
      <HeaderText>{text}</HeaderText>
      <HeaderButton onClick={onSave}>
        <MdCheck />
      </HeaderButton>
    </ModalHeaderContainer>
  );
};
