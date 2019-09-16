import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { BaseScreen } from 'components';
import { useLockBodyScroll } from 'hooks/useLockBodyScroll';

const ModalWrapper = styled(BaseScreen)`
  position: fixed;
  top: 0;
`;

export const Modal: React.FC<{}> = ({ children }) => {
  useLockBodyScroll();

  return ReactDOM.createPortal(<ModalWrapper>{children}</ModalWrapper>, document.body);
};
