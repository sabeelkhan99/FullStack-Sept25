import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router'

const App2 = () => {

    const [HomePage, setHomePage] = useState(null);
    const [AboutPage, setAboutPage] = useState(null);
    const [ProductPage, setProductPage] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') {
            import('./components/Home').then((module) => setHomePage(() => module.default))
        }
        else if (pathname === '/products') {
            import('./components/Product').then((module) => setProductPage(() => module.default));
        }
        else if (pathname === '/about') {
            import('./components/About').then((module) => setAboutPage(() => module.default));
        }

    }, []);

    /* Key Points About Dynamic Import
        1. Asynchronous Loading: Dynamic import allows you to load modules asynchronously, meaning the rest of your application can continue to run while the module is being fetched.
        2. Code Splitting: By using dynamic import, you can split your code into smaller chunks that are loaded on demand. This helps in reducing the initial load time of your application.
        3. Improved Performance: Loading only the necessary code when it is needed can significantly improve the performance of your application, especially for large applications with many components.
        4. Better Resource Utilization: Users download only the code they need, which saves bandwidth and results in a more efficient use of resources.
    */
    
    /*  
        Problems with current approach
        
        1. Manual State Management
        2. Lack of Built-in Fallback UI
        3. Complexity

    */
    const loadAboutPage = () => {
        import('./components/About').then((module) => setAboutPage(() => module.default));
    }

    const loadProductPage = () => {
        import('./components/Product').then((module) => setProductPage(() => module.default));
    }

    const loadHomePage = () => {
        import('./components/Home').then((module) => setHomePage(() => module.default));
    }

    return (
        <div>
            <h1>React Performance Demo</h1>
            <nav>
                <ul>
                    <li><Link onClick={loadHomePage} to="/">Home</Link></li>
                    <li><Link onClick={loadAboutPage} to="/about">About</Link></li>
                    <li><Link onClick={loadProductPage} to="/products">Product</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={HomePage ? <HomePage /> : <p>Loading....</p>} />
                <Route path='/about' element={AboutPage ? <AboutPage /> : <p>Loading...</p>} />
                <Route path='/products' element={ProductPage ? <ProductPage /> : <p>Loading....</p>} />
            </Routes>
        </div>
    )
}

export default App2
