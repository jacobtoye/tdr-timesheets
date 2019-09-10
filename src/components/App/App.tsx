import * as React from 'react';
import Router from '../Router';
import { UserProvider } from 'contexts/UserContext';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};

export default App;
