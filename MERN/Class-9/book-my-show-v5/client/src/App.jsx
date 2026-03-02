import React from 'react'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router'
import AllMovies from './pages/AllMovies'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ShowMovie from './pages/ShowMovie'
import CreateTheatre from './pages/CreateTheatre'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMovies />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/movies/:id' element={<ShowMovie />} />
        <Route path='/theatres/new' element={<CreateTheatre />} />
      </Routes>
    </Layout>
  )
}

export default App
