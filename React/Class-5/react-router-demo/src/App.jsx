import React, { useState } from 'react'
import Cat from './pages/Cat';
import Dog from './pages/Dog';
import Login from './pages/Login';
import Home from './pages/Home';
import { Routes, Route, Link, NavLink, Navigate } from 'react-router';
import ShowProduct from './pages/ShowProduct';



const App = () => {

    const [page, setPage] = useState('cat');

    return (
        // <div>
        //     <button onClick={()=> setPage('cat')}>Cat</button>
        //     <button onClick={()=> setPage('dog')}>Dog</button>
        //     <button onClick={() => setPage('login')}>Login</button>
            
        //     {page==='cat' && <Cat/>}
        //     {page==='dog' && <Dog/>}
        //     {page==='login' && <Login/>}
        // </div>
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                             style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                            })}>Home</NavLink></li>
                    <li><Link to="/cat">Cat</Link></li>
                    <li><Link to="/dog">Dog</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/products/1">Product 1</Link></li>
                    <li><Link to="/products/2">Product 2</Link></li>
                    <li><Link to="/products/3">Product 3</Link></li>
                    <li><Link to="/products/4">Product 4</Link></li>
                    <li><Link to="/products/5">Product 5</Link></li>
                    <li><Link to="/abc">Visit ABC</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home/> } />
                <Route path='/cat' element={ <Cat/> } />
                <Route path='/dog' element={ <Dog/> } />
                <Route path='/login' element={<Login />} />
                <Route path='/products/:id' element={<ShowProduct />} />
                <Route path='/not-found' element={ <h1>404 Page Not Found</h1> } />
                <Route path='/abc' element={<Navigate to="/not-found"/> } />
                <Route path='*' element={<Navigate to="/not-found"/> } />
            </Routes>
        </div>
    )
}

export default App
