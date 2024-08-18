import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import { DarkModeContextProvider } from './context/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <DarkModeContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </DarkModeContextProvider>
    </GlobalStyles>,
);
