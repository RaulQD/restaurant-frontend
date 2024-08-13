import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppRoutes />
            <ReactQueryDevtools
                initialIsOpen={false}
                buttonPosition='bottom-left'
                position='left'
            />
            <Toaster
                position='top-center'
                gutter={12}
                containerStyle={{
                    margin: '8px',
                }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 3000,
                    },
                    style: {
                        fontSize: '16px',
                        maxWidth: '800px',
                        padding: '16px 24px',
                    },
                }}
            />
        </QueryClientProvider>
    </React.StrictMode>
);
