import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';
import WatchListPage from './pages/WatchListPage';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route path='/watchlist' element={<WatchListPage/> } />
            </Routes>
        </Layout>
    )
}

export default App
