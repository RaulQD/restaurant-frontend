import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppRoutes />
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
                        maxWidth: '400px',
                        padding: '16px 24px',
                    },
                }}
            />
        </QueryClientProvider>
    </React.StrictMode>
);
