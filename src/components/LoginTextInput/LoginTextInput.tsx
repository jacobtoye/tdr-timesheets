import * as React from 'react';
import styled from '@emotion/styled';
import { FaLock, FaUser } from 'react-icons/fa';

const IconTextInputWrapper = styled('div')`
  display: flex;
  width: 100%;
`;

const LoginInput = styled('input')`
  background-color: transparent;
  border: 0 solid #e2e8f0;
  border-bottom-width: 2px;
  line-height: 1.25;
  margin: 0;
  overflow: visible;
  padding: 0.5rem 2.75rem 0.5rem 1rem;
  width: 100%;
`;

const UserIcon = styled(FaUser)`
  align-self: center;
  color: #e2e8f0;
  fill: currentColor;
  font-size: 0.75em;
  margin-left: -1.5em;
`;

const LockIcon = styled(FaLock)`
  align-self: center;
  color: #e2e8f0;
  fill: currentColor;
  font-size: 0.75em;
  margin-left: -1.5em;
`;

export interface LoginTextInputProps {
  isPassword?: boolean;
}

export const LoginTextInput : React.FC<LoginTextInputProps> = ({ isPassword = false }: LoginTextInputProps) => {
  return (
    <IconTextInputWrapper>
      <LoginInput type={ isPassword ? 'password' : 'text' } />
      { isPassword ? <LockIcon /> : <UserIcon /> }
    </IconTextInputWrapper>
  );
};

export default LoginTextInput;
