import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { CartItem, Product } from '../types/product'
import { ShopContext, type ShopContextValue, type SnackbarNotice } from './ShopState'

function readStoredValue<T,>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : fallback
  } catch {
    return fallback
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => readStoredValue('trendgen-z-cart', []))
  const [wishlist, setWishlist] = useState<Product[]>(() => readStoredValue('trendgen-z-wishlist', []))
  const [notice, setNotice] = useState<SnackbarNotice | null>(null)
  const noticeId = useRef(0)

  useEffect(() => {
    localStorage.setItem('trendgen-z-cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('trendgen-z-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    if (!notice) return
    const timeoutId = window.setTimeout(() => setNotice(null), 4200)
    return () => window.clearTimeout(timeoutId)
  }, [notice])

  const notify = (message: string) => setNotice({ id: ++noticeId.current, message })

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id)
      return existing
        ? current.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { product, quantity: 1 }]
    })
    notify('Added to bag')
  }

  const removeFromCart = (productId: string) => {
    setCart((current) => current.filter((item) => item.product.id !== productId))
    notify('Item removed from bag')
  }

  const increaseQuantity = (productId: string) => {
    setCart((current) => current.map((item) => item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item))
    notify('Quantity increased')
  }

  const decreaseQuantity = (productId: string) => {
    setCart((current) => current.map((item) => item.product.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item))
    notify('Quantity decreased')
  }

  const addToWishlist = (product: Product) => {
    setWishlist((current) => current.some((item) => item.id === product.id) ? current : [...current, product])
    notify('Added to wishlist')
  }

  const removeFromWishlist = (productId: string) => {
    setWishlist((current) => current.filter((product) => product.id !== productId))
    notify('Removed from wishlist')
  }

  const value: ShopContextValue = {
    cart,
    wishlist,
    notice,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart: () => setCart([]),
    addToWishlist,
    removeFromWishlist,
    isInWishlist: (productId) => wishlist.some((product) => product.id === productId),
    getWishlistCount: () => wishlist.length,
    getCartItemCount: () => cart.reduce((total, item) => total + item.quantity, 0),
    getCartSubtotal: () => cart.reduce((total, item) => total + item.product.price * item.quantity, 0),
    notify,
    dismissNotice: () => setNotice(null),
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
