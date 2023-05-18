import { createContext, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/AuthService';

interface IAuthContext {
  authenticated: boolean;
  logIn: (data: Login.credentials) => void;
  logOut: () => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
  const [ authenticated, setAuthenticated ] = useState<boolean>(false);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const navigate = useNavigate();

  const logIn = useCallback(async (data: Login.credentials) => {
    try {
      setIsLoading(true);
      await AuthService.login(data);
      setAuthenticated(true);
      setIsLoading(false);
      navigate(`/Home`);
    } catch (error) {
      setAuthenticated(false);
      setIsLoading(false);
    }
  }, []);

  const logOut = useCallback(async () => {
    try {
      await AuthService.logout();
      setAuthenticated(false);
    } catch (error) {
      setAuthenticated(true);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ authenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};
