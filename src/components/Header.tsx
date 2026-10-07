import { useState } from 'react'
import { Heart, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { products } from '../data/products'
import { useShop } from '../context/useShop'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { label: 'HOME', to: '/home' },
  { label: 'MEN', to: '/men' },
  { label: 'WOMEN', to: '/women' },
  { label: 'KIDS', to: '/kids' },
]

export default function Header() {
  const { getCartItemCount, getWishlistCount } = useShop()
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const matches = query.trim()
    ? products.filter((product) => product.name.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 5)
    : []

  const closeMenus = () => {
    setMenuOpen(false)
    setQuery('')
  }

  return (
    <header className="site-header">
      <div className="header-main">
        <button className="icon-button menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <Link className="wordmark" to="/" onClick={closeMenus} aria-label="Trendgen-Z home">
          <span className="wordmark-mark">T<span>Z</span></span>
          <span className="wordmark-name">TRENDGEN-<span>Z</span></span>
        </Link>

        <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenus} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-search">
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => { if (event.key === 'Escape') setQuery('') }}
            placeholder="Search for products, brands and more"
            aria-label="Search products"
          />
          {query && <button className="search-clear" type="button" aria-label="Clear search" onClick={() => setQuery('')}><X size={16} /></button>}
          {query && (
            <div className="search-results" role="status">
              {matches.length ? matches.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="search-result" onClick={() => setQuery('')}>
                  <img src={product.image} alt="" />
                  <span><strong>{product.name}</strong><small>₹{product.price.toLocaleString('en-IN')}</small></span>
                </Link>
              )) : <p className="search-empty">No products found.</p>}
            </div>
          )}
        </div>

        <div className="header-actions">
          <div className="profile-wrap">
            <button className="header-action" type="button" aria-expanded={profileOpen} onClick={() => setProfileOpen(!profileOpen)}>
              <UserRound /><span>Profile</span>
            </button>
            {profileOpen && <div className="profile-popover"><strong>Welcome to Trendgen-Z</strong><span>Shopping as a guest</span><button type="button" onClick={() => setProfileOpen(false)}>Got it</button></div>}
          </div>
          <Link className="header-action" to="/wishlist" onClick={closeMenus}>
            <span className="action-icon"><Heart /><b className="count-badge">{getWishlistCount()}</b></span><span>Wishlist</span>
          </Link>
          <Link className="header-action" to="/bag" onClick={closeMenus}>
            <span className="action-icon"><ShoppingBag /><b className="count-badge">{getCartItemCount()}</b></span><span>Bag</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
      <div className="announcement"><span>NEW SEASON, NEW STORIES</span><span>Complimentary delivery on every order</span></div>
    </header>
  )
}
