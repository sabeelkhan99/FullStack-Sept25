import React from 'react'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router'
import AllMovies from './pages/AllMovies'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMovies />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Layout>
  )
}

export default App
