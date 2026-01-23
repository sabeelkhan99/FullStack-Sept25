import React from 'react'
import { Link, Route, Routes } from 'react-router'

// static import
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'

const App1 = () => {
  return (
    <div>
          <h1>React Performance Demo</h1>
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/products">Product</Link></li>
              </ul>
          </nav>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/products' element={<Product />} />
          </Routes>
    </div>
  )
}

export default App1
