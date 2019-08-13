import * as React from 'react';
import { BaseScreen } from '../BaseScreen';
import CenteredContainer from '../CenteredContainer';
import Button from '../Button';
import { useUserContext } from '../../screens/Login/UserContext';
import { History } from 'history';

interface MainLayoutProps {
  children?: JSX.Element;
  history: History;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, history }: MainLayoutProps) => {
  const { logOut } = useUserContext();
  
  const onClick = () => {
    logOut();
    history.push('/');
  };

  return (
    <BaseScreen>
      {children}
      <CenteredContainer>
        <Button onClick={onClick}>Logout</Button>
      </CenteredContainer>
    </BaseScreen>
  );
};

export default MainLayout;
