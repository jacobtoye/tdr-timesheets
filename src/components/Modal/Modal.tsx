import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { BaseScreen } from 'components';
import { useLockBodyScroll } from 'hooks/useLockBodyScroll';
import { CSSTransition } from 'react-transition-group';

const ModalWrapper = styled(BaseScreen)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;

  &.modal-transition-enter {
    transform: translateY(100%);
  }

  &.modal-transition-enter-active {
    transition: transform 300ms;
    transform: translateY(0);
  }

  &.modal-transition-exit {
    transform: translateY(0);
  }

  &.modal-transition-exit-active {
    transition: transform 300ms;
    transform: translateY(100%);
  }
`;

interface ModalProps {
  isShowing: boolean;
  children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isShowing, children }: ModalProps) => {
  useLockBodyScroll();

  const modalBody = (
    <CSSTransition
      in={isShowing}
      className="modal-transition"
      classNames="modal-transition"
      unmountOnExit
      timeout={300}
    >
      <ModalWrapper>{children}</ModalWrapper>
    </CSSTransition>
  );

  return ReactDOM.createPortal(modalBody, document.body);
};
