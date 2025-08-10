import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {AppLayout} from "./layouts/app-layout.tsx";
import AppPages from "./routes/AppPages.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


// Main App component
const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <AppLayout>
                    <AppPages/>
                </AppLayout>
            </QueryClientProvider>
        </Router>
    );
};

export default App;
