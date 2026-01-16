import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { WatchlistContextProvider } from './store/watchlist-context.jsx';
import { DummyContextProvider } from './store/dummy-context.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <WatchlistContextProvider>
                <DummyContextProvider>
                    <App />
                </DummyContextProvider>
            </WatchlistContextProvider>
        </BrowserRouter>
    </StrictMode>,
)
