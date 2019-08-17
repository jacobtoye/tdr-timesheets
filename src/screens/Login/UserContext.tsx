import * as React from 'react';

interface User {
  id: number;
  userName: string;
  email: string;
}

interface UserState {
  user?: User;
  loggingIn: boolean;
}

interface UserContext {
  userState: UserState;
  setUserState: (userState: UserState) => void;
  getUser: () => void;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
}

const initialState = { user: undefined, loggingIn: true };

export const UserContext = React.createContext<UserContext>({
  userState: initialState,
  setUserState: () => {},
  getUser: () => {},
  logIn: () => {},
  logOut: () => {},
});

export const UserProvider: React.FC<{}> = ({ children }) => {
  const [userState, setUserState] = React.useState<UserState>(initialState);

  const getUser = async () => {
    let user: User | undefined = undefined;

    try {
      // Get the user from the server. We've likely already authenticated. If not the user will be null.
      // user = await accountsGraphQL.getUser()
      user = {
        id: -1,
        userName: 'test',
        email: 'test.user@email.com',
      };

      console.log('User: ', user);
    } catch (error) {
      console.error('There was an error logging in.', error);
    } finally {
      // Save the retrieved user to user state
      setUserState({ user: user && { ...user, id: user.id }, loggingIn: false });
    }
  };

  const logIn = async (email: string, password: string) => {
    console.log(`Logging in as ${email} / ${password}.`);
    // await accountsPassword.login({ password, user: { email } });
    await getUser();
  };

  const logOut = async () => {
    console.log('Logging out user.');
    // await accountsGraphQL.logout();l
    setUserState({ user: undefined, loggingIn: false });
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        setUserState,
        getUser,
        logIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => React.useContext(UserContext);
