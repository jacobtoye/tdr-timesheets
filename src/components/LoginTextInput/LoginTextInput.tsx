import * as React from 'react';
import styled from '@emotion/styled';
import { FaLock, FaUser } from 'react-icons/fa';

const IconTextInputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

// TODO: add theme for colours

const Label = styled('label')`
  color: #404040;
  height: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  width: 100%;
`;

const InputWrapper = styled('div')`
  display: flex;
  width: 100%;
`;

const LoginInput = styled('input')`
  background-color: transparent;
  border: 0 solid #e2e8f0;
  border-bottom-width: 2px;
  line-height: 1.25;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  width: 100%;

  :focus {
    border-bottom-color: #A6003A;
  }
`;

const UserIcon = styled(FaUser)`
  align-self: center;
  color: #cacaca;
  fill: currentColor;
  font-size: 1em;
  margin-left: -2em;
`;

const LockIcon = styled(FaLock)`
  align-self: center;
  color: #cacaca;
  fill: currentColor;
  font-size: 1em;
  margin-left: -2em;
`;

export interface LoginTextInputProps {
  title: string;
  isPassword?: boolean;
}

export const LoginTextInput : React.FC<LoginTextInputProps> = ({ title, isPassword = false }: LoginTextInputProps) => {
  return (
    <IconTextInputWrapper>
      <Label>{title}</Label>
      <InputWrapper>
        <LoginInput type={ isPassword ? 'password' : 'text' } data-lpignore="true" />
        { isPassword ? <LockIcon /> : <UserIcon /> }
      </InputWrapper>
    </IconTextInputWrapper>
  );
};

export default LoginTextInput;
