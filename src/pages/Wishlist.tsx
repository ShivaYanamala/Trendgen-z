import { ArrowRight, Heart, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useShop } from '../context/useShop'

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useShop()
  return (
    <section className="content-section wishlist-page">
      <div className="collection-heading"><div><span className="eyebrow">YOUR PERSONAL EDIT</span><h1>My Wishlist <span>({wishlist.length})</span></h1></div></div>
      {wishlist.length ? (
        <div className="wishlist-grid">{wishlist.map((product) => (
          <article className="wishlist-card" key={product.id}>
            <Link to={`/product/${product.id}`} className="wishlist-image"><img src={product.image} alt={product.name} loading="lazy" /></Link>
            <div className="wishlist-card-copy"><Link to={`/product/${product.id}`} className="product-name">{product.name}</Link><strong>₹{product.price.toLocaleString('en-IN')}</strong><div><button type="button" className="text-link" onClick={() => addToCart(product)}>SHOP <ArrowRight size={15} /></button><button type="button" className="remove-button" aria-label={`Remove ${product.name} from wishlist`} onClick={() => removeFromWishlist(product.id)}><Trash2 size={16} /></button></div></div>
          </article>
        ))}</div>
      ) : (
        <div className="empty-state"><span className="empty-icon"><Heart /></span><span className="eyebrow">A LITTLE SPACE FOR LOVE</span><h2>Your wishlist is waiting.</h2><p>Save the pieces you love and find them here whenever you're ready.</p><Link className="button-primary" to="/women">DISCOVER YOUR NEXT FAVORITE <ArrowRight size={16} /></Link></div>
      )}
    </section>
  )
}
