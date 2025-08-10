import React from 'react';
import TopNavBar from "./partials/top-nav-bar.tsx";
import {Footer} from "./partials/footer.tsx";

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
    return (

        <div className="min-h-screen bg-gray-100 flex flex-col items-center w-full">
            {/* Navigation Bar */}
            <TopNavBar/>
            <div className="bg-gray-100 flex flex-col items-center">
                {/* Main Content Area */}
                {/* This section will house the content of the currently active route */}
                <main className="w-full flex items-center justify-center p-4 max-w-7xl">
                    {children}
                </main>
            </div>
            {/* Footer */}
            <Footer/>
        </div>

    );
};