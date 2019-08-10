import * as React from 'react';
import {
  BaseScreen,
  Button,
  LoginTextInput
} from '../../components';
import LoginContainer from './components/LoginContainer';

// TODO: remove tailwind.css and add reset stylesheet

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
