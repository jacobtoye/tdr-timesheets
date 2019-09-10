import * as React from 'react';
import { BaseScreen } from 'components';
import { Logo } from './components/Logo';
import { useUserContext } from 'contexts/UserContext';
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
    history.push('/timesheet');
  };

  return (
    <BaseScreen>
      <Logo onClick={onLoginClick} />
    </BaseScreen>
  );
};

export default Login;
