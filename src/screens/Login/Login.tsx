import * as React from 'react';
import {
  BaseScreen,
  Button,
  LoginTextInput
} from '../../components';
import LoginContainer from './components/LoginContainer';

const Login : React.FC = () => {
  return (
    <BaseScreen>
      <LoginContainer>
        <LoginTextInput title="username" />
        <LoginTextInput title="password" isPassword={true} />
        <Button>Login</Button>
      </LoginContainer>
    </BaseScreen>
  );
};

export default Login;
