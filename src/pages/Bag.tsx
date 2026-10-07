import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import QuantityControl from '../components/QuantityControl'
import { useShop } from '../context/useShop'

export default function Bag() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getCartItemCount, getCartSubtotal, notify } = useShop()
  const subtotal = getCartSubtotal()

  const placeOrder = () => {
    clearCart()
    notify('Your order is placed. Thank you!')
  }

  if (!cart.length) {
    return <section className="content-section bag-page"><div className="empty-state"><span className="empty-icon"><ShoppingBag /></span><span className="eyebrow">ROOM FOR SOMETHING GOOD</span><h1>Your bag is taking a breather.</h1><p>When something feels right, it will be waiting here.</p><Link className="button-primary" to="/">CONTINUE SHOPPING <ArrowRight size={16} /></Link></div></section>
  }

  return (
    <section className="content-section bag-page">
      <div className="collection-heading"><div><span className="eyebrow">A FEW GOOD CHOICES</span><h1>Your shopping bag</h1></div><span className="product-count">{getCartItemCount()} {getCartItemCount() === 1 ? 'ITEM' : 'ITEMS'}</span></div>
      <div className="bag-layout">
        <div className="bag-items">{cart.map(({ product, quantity }) => (
          <article className="bag-item" key={product.id}>
            <Link className="bag-item-image" to={`/product/${product.id}`}><img src={product.image} alt={product.name} /></Link>
            <div className="bag-item-info">
              <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
              <p>{product.description}</p>
              <div className="bag-unit-price">₹{product.price.toLocaleString('en-IN')} <span>{product.discount}% off</span></div>
              <div className="bag-item-controls"><QuantityControl quantity={quantity} onDecrease={() => decreaseQuantity(product.id)} onIncrease={() => increaseQuantity(product.id)} /><button type="button" className="remove-button" onClick={() => removeFromCart(product.id)}><Trash2 size={15} /> REMOVE</button></div>
            </div>
            <strong className="line-total">₹{(product.price * quantity).toLocaleString('en-IN')}</strong>
          </article>
        ))}</div>
        <aside className="order-summary">
          <span className="eyebrow">ORDER SUMMARY</span><h2>Price details</h2>
          <div className="summary-row"><span>Items</span><span>{getCartItemCount()}</span></div>
          <div className="summary-row"><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
          <div className="summary-row"><span>Delivery</span><strong className="free-delivery">FREE</strong></div>
          <div className="summary-total"><strong>Total</strong><strong>₹{subtotal.toLocaleString('en-IN')}</strong></div>
          <button className="button-primary place-order" type="button" onClick={placeOrder}>PLACE ORDER <ArrowRight size={16} /></button>
          <Link className="button-outline continue-shopping" to="/">CONTINUE SHOPPING</Link>
          <p className="secure-note">A good choice, delivered with care.</p>
        </aside>
      </div>
    </section>
  )
}
