import { lazy, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router'

const App = () => {

    const HomePage = lazy(() => import('./components/Home'));
    const AboutPage = lazy(() => import('./components/About'));
    const ProductPage = lazy(() => import('./components/Product'));

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
                <Route path='/' element={
                    <Suspense fallback={<p>Loading...</p>}>
                        <HomePage />
                    </Suspense>
                } />
                <Route path='/about' element={
                    <Suspense fallback={<p>Loading...</p>}>
                        <AboutPage />
                    </Suspense>
                } />
                <Route path='/products' element={
                    <Suspense fallback={<p>Loading...</p>}>
                        <ProductPage />
                    </Suspense>
                } />
            </Routes>
        </div>
    )
}

export default App
