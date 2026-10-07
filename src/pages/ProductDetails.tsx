import { ArrowLeft, Heart, ShieldCheck, Star } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useShop } from '../context/useShop'
import { products } from '../data/products'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop()

  if (!product) return <section className="not-found"><span className="eyebrow">NOT FOUND</span><h1>That piece has moved on.</h1><Link to="/">Back to the home page</Link></section>

  const saved = isInWishlist(product.id)
  return (
    <section className="product-detail content-section">
      <Link to={`/${product.category}`} className="back-link"><ArrowLeft size={16} /> Back to {product.category}</Link>
      <div className="detail-layout">
        <div className="detail-image"><img src={product.image} alt={product.name} /><span className="product-tag">{product.tag}</span></div>
        <div className="detail-copy">
          <span className="eyebrow">TRENDGEN-Z / {product.category.toUpperCase()}</span>
          <h1>{product.name}</h1>
          <div className="detail-rating"><Star size={15} fill="currentColor" /> {product.rating.toFixed(1)} <span>•</span> Loved by the community</div>
          <div className="detail-price"><strong>₹{product.price.toLocaleString('en-IN')}</strong><span>{product.discount}% off</span></div>
          <p className="detail-description">{product.description}</p>
          <div className="detail-actions"><button className="button-primary" type="button" onClick={() => addToCart(product)}>ADD TO BAG <span>·</span> ₹{product.price.toLocaleString('en-IN')}</button><button className={`button-outline save-detail ${saved ? 'is-saved' : ''}`} type="button" onClick={() => saved ? removeFromWishlist(product.id) : addToWishlist(product)}><Heart size={17} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'SAVED' : 'SAVE'}</button></div>
          <div className="detail-perks"><div><ShieldCheck size={18} /><span>Easy returns within 14 days</span></div><div><span className="delivery-dot" /><span>Complimentary delivery</span></div></div>
          <div className="detail-note"><span className="eyebrow">A LITTLE ABOUT IT</span><p>{product.description} Thoughtfully chosen for comfort, quality, and the everyday.</p></div>
        </div>
      </div>
    </section>
  )
}
