import { lazy } from 'react';
import './App.css';
import { useAuth } from './context/AuthContext';

const AuthenticatedApp = lazy(() => import(`../src/container/Authenticated`));
const UnauthenticatedApp = lazy(() => import(`../src/pages/auth/Login`));

function App() {
  const { authenticated } = useAuth();
  return (
    !authenticated ? <UnauthenticatedApp /> : <AuthenticatedApp />
  );
}

export default App;
