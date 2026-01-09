import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import Login from './pages/Login';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/login' element={ <Login/>} />
            </Routes>
        </Layout>
    )
}

export default App
