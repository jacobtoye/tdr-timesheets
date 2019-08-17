import * as React from 'react';
import { BaseScreen, Button, LoginTextInput } from '../../components';
import LoginContainer from './components/LoginContainer';
import { useUserContext } from '../../screens/Login/UserContext';
import { History } from 'history';

interface LogInProps {
  history: History;
}

const Login: React.FC<LogInProps> = ({ history }: LogInProps) => {
  const { logIn } = useUserContext();

  // Set up local state
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onEmailChange = (e: React.FormEvent<HTMLInputElement>): void => setEmail(e.currentTarget.value);
  const onPasswordChange = (e: React.FormEvent<HTMLInputElement>): void => setPassword(e.currentTarget.value);

  const onLoginClick = (): void => {
    logIn(email, password);
    history.push('/');
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
