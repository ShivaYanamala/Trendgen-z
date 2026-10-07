import { Link, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Bag from './pages/Bag'
import CollectionPage from './pages/CollectionPage'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Wishlist from './pages/Wishlist'
import './storefront.css'

function NotFound() {
  return <section className="not-found"><span className="eyebrow">404 / NOT FOUND</span><h1>Looks like a wrong turn.</h1><p>The page you’re after isn’t here.</p><Link className="button-primary" to="/">BACK TO HOME</Link></section>
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="men" element={<CollectionPage category="men" />} />
        <Route path="women" element={<CollectionPage category="women" />} />
        <Route path="kids" element={<CollectionPage category="kids" />} />
        <Route path="home" element={<CollectionPage category="home" />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="bag" element={<Bag />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
