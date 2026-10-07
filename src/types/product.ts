export type ProductCategory = 'men' | 'women' | 'kids' | 'home'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: ProductCategory
  image: string
  tag: string
  discount: number
  rating: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export type Theme = 'light' | 'dark'
