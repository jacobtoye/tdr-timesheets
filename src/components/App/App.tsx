import * as React from 'react';
import Router from '../Router';
import { UserProvider } from '../../screens/Login/UserContext';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
};

export default App;
