import * as React from 'react';
import {
  BaseScreen,
  Button,
  LoginTextInput
} from '../../components';
import LoginContainer from './components/LoginContainer';
import { useUserContext } from '../../screens/Login/UserContext';

const Login : React.FC = () => {
  const { logIn } = useUserContext();

  // Set up local state
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);
  const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value);

  const onLoginClick = () => {
    logIn(email, password);
  };

  return (
    <BaseScreen>
      <LoginContainer>
        <LoginTextInput title="email" onChange={onEmailChange} />
        <LoginTextInput title="password" isPassword={true} onChange={onPasswordChange} />
        <Button onClick={onLoginClick}>Login</Button>
      </LoginContainer>
    </BaseScreen>
  );
};

export default Login;
