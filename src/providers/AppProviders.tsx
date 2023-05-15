import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '../container/ErrorBoundary'

function AppProviders({ children }: { children: JSX.Element }) {
    const queryClient = new QueryClient()
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </QueryClientProvider>
        </ErrorBoundary>
    )
}

export default AppProviders