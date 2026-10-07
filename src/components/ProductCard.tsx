import { Heart, Plus, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useShop } from '../context/useShop'
import type { Product } from '../types/product'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop()
  const saved = isInWishlist(product.id)

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`} className="product-image-link" aria-label={`View ${product.name}`}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>
        <span className="product-tag">{product.tag}</span>
        <button className={`wishlist-button ${saved ? 'is-saved' : ''}`} type="button" aria-label={saved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`} onClick={() => saved ? removeFromWishlist(product.id) : addToWishlist(product)}>
          <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <button className="quick-add" type="button" onClick={() => addToCart(product)}><Plus size={16} /> Add to bag</button>
      </div>
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        <div className="product-meta"><span className="product-price">₹{product.price.toLocaleString('en-IN')}</span><span className="product-discount">{product.discount}% off</span></div>
        <span className="product-rating"><Star size={13} fill="currentColor" /> {product.rating.toFixed(1)} <span>·</span> Easy returns</span>
      </div>
    </article>
  )
}
