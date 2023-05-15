import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '../container/ErrorBoundary'
import { AuthContextProvider } from '../context/AuthContext'

function AppProviders({ children }: { children: JSX.Element }) {
    const queryClient = new QueryClient()
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
    )
}

export default AppProviders