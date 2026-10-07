import { createContext } from 'react'
import type { CartItem, Product } from '../types/product'

export interface SnackbarNotice {
  id: number
  message: string
}

export interface ShopContextValue {
  cart: CartItem[]
  wishlist: Product[]
  notice: SnackbarNotice | null
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
  clearCart: () => void
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  getWishlistCount: () => number
  getCartItemCount: () => number
  getCartSubtotal: () => number
  notify: (message: string) => void
  dismissNotice: () => void
}

export const ShopContext = createContext<ShopContextValue | null>(null)
