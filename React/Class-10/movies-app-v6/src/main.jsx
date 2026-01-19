import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { WatchlistContextProvider } from './store/watchlist-context.jsx';
import { DummyContextProvider } from './store/dummy-context.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <WatchlistContextProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </WatchlistContextProvider>
        </BrowserRouter>
    </StrictMode>,
)
