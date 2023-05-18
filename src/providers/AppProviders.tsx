import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '../container/ErrorBoundary';
import { AuthContextProvider } from '../context/AuthContext';

function AppProviders({ children }: { children: JSX.Element }) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        retry(failureCount: number, error: any) {
          if (error.status === 404) { return false; }
          else if (failureCount < 2) { return true; }
          return false;
        },
        staleTime: 1000 * 60 * 60,
        useErrorBoundary: true,
      },
    },
  });

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default AppProviders;
