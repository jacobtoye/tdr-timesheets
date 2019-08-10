import * as React from 'react';
import {
  BaseScreen,
  CenteredContainer,
  LoginTextInput
} from '../../components';

const Login : React.FC = () => {
  return (
    <BaseScreen>
      <CenteredContainer>
        <LoginTextInput />
        <LoginTextInput isPassword={true} />
      </CenteredContainer>
    </BaseScreen>
  );
};

export default Login;
