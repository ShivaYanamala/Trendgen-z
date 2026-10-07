# Trendgen-Z --- Frontend E-Commerce Requirements

## Project

Trendgen-Z is a frontend-only e-commerce learning project built with
React and TypeScript. The attached screenshots are the visual reference
for the header, hero sections, collection pages, product cards,
wishlist, shopping bag, category sections, footer, and responsive
behavior.

Use original Trendgen-Z branding. Do not copy Myntra branding or logos.

## Technology

-   React
-   TypeScript
-   Vite
-   React Router DOM
-   React Context API
-   React Hooks
-   HTML
-   CSS
-   lucide-react

Do not use Redux, Zustand, Bootstrap, Tailwind CSS, Material UI, a
backend, or a database.

## Learning Goals

Practice JSX/TSX, components, nested components, props, state, event
handling, conditional rendering, map, filter, find, reduce, useState,
useEffect, useContext, Context API, React Router, dynamic routes,
TypeScript types/interfaces, typed props, responsive CSS, CSS variables,
and localStorage.

## Header

Create a reusable header with:

-   Trendgen-Z logo
-   MEN
-   WOMEN
-   HOME
-   KIDS
-   Search bar with "Search for products, brands and more"
-   Profile
-   Wishlist
-   Bag

Wishlist and Bag badges must be dynamic.

On mobile, use a hamburger menu and responsive navigation.

## Footer

Create reusable footer sections:

### SHOP

Men, Women, Home, Kids, New Arrivals, Best Sellers

### CUSTOMER CARE

Contact Us, FAQ, Shipping, Returns, Track Order

### ABOUT TRENDGEN-Z

Our Story, Careers, Privacy Policy, Terms & Conditions, Sustainability

### FOLLOW US

Instagram, Facebook, Pinterest, YouTube

Newsletter: "Stay in the Trendgen-Z loop." "Get updates on new
collections, exclusive offers and more."

## Home

Include:

1.  Hero
2.  Shop By Category
3.  Featured products
4.  Footer

Hero text:

-   THE NEW ERA OF EVERYDAY STYLE
-   Trendgen-Z
-   Fashion • Comfort • Expression
-   Discover pieces made for your own story.
-   EXPLORE

Category cards:

-   Ethnic Wear
-   Casual Wear
-   Men's Activewear
-   Women's Activewear
-   Western Wear
-   Sportswear
-   Loungewear
-   Beauty & Makeup

## Collection Pages

Routes:

-   /men
-   /women
-   /kids
-   /home

Men hero: "MODERN ESSENTIALS" Women hero: "EFFORTLESS ELEGANCE" Home
hero: "BEAUTY FOR EVERY SPACE" Kids should use a similar Trendgen-Z
style.

Use reusable collection, ProductGrid, and ProductCard components.

## Product Data

Create `src/data/products.ts`.

Define a TypeScript `Product` type/interface with:

-   id
-   name
-   description
-   price
-   category
-   image
-   tag
-   discount
-   rating

Categories:

-   men
-   women
-   kids
-   home

Create at least 8 products per major category. Keep product data
separate from UI.

## Product Card

Create a reusable ProductCard receiving a typed Product prop.

Display:

-   image
-   tag
-   name
-   price
-   discount
-   rating
-   wishlist button
-   Add to Bag button

Add a smooth image hover/zoom effect.

Navigate to `/product/:id` when the product is selected.

## Product Details

Create `/product/:id`.

Use `useParams()` and `find()` to get the product.

Display image, name, description, price, discount, rating, category, Add
to Wishlist, and Add to Bag.

## Wishlist

Use React Context API.

Functions:

-   addToWishlist(product)
-   removeFromWishlist(productId)
-   isInWishlist(productId)
-   getWishlistCount()

Create `/wishlist`.

Display "My Wishlist (X)" with a dynamic count.

Each item has image, name, price, SHOP, and remove.

Show an empty state when there are no items.

## Shopping Bag

Use Context API.

Functions:

-   addToCart(product)
-   removeFromCart(productId)
-   increaseQuantity(productId)
-   decreaseQuantity(productId)
-   getCartItemCount()
-   getCartSubtotal()
-   clearCart()

Create `/bag`.

Display product image, name, description, price, quantity controls, and
remove.

Quantity uses `[-] quantity [+]`.

Quantity cannot become less than 1.

Calculate subtotal dynamically.

Example: ₹999 × 2 = ₹1,998.

Display Items, Subtotal, Delivery FREE, and Total.

Buttons: PLACE ORDER and CONTINUE SHOPPING.

## Snackbar

Create a reusable Snackbar component without a third-party library.

Show:

-   Added to bag
-   Quantity increased
-   Quantity decreased
-   Item removed from bag
-   Added to wishlist
-   Removed from wishlist

It should appear smoothly and disappear automatically after about 2--3
seconds.

Desktop: bottom-right. Mobile: bottom-center.

When quantity changes, the cart quantity, Bag badge, subtotal, and
snackbar must update immediately.

## Theme

Create `ThemeContext.tsx` and `ThemeToggle.tsx`.

Support only:

-   Light
-   Dark

Use CSS variables such as:

-   --background
-   --text
-   --card-background
-   --border
-   --primary
-   --header-background

Persist the theme with localStorage.

## Search

Search products by name using React state and `filter()`.

Show "No products found." when appropriate.

## Routing

Use BrowserRouter, Routes, Route, Link, NavLink, and Outlet.

Routes:

-   /
-   /men
-   /women
-   /kids
-   /home
-   /wishlist
-   /bag
-   /product/:id

MainLayout should contain Header, Outlet, and Footer.

## Responsive Design

Desktop:

-   Full navigation
-   Search
-   Profile/Wishlist/Bag
-   4-column product grid

Tablet:

-   2-column product grid

Mobile:

-   Hamburger navigation
-   1-column product grid
-   Touch-friendly controls
-   Responsive hero
-   Stacked bag layout
-   Stacked footer
-   Bottom-centered snackbar

Use CSS media queries. No CSS framework.

## Local Storage

Persist:

-   cart
-   wishlist
-   theme

Use `localStorage` and `useEffect`.

## Recommended Structure

``` text
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroBanner.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── CategoryCard.tsx
│   ├── QuantityControl.tsx
│   ├── Snackbar.tsx
│   └── ThemeToggle.tsx
├── pages/
│   ├── Home.tsx
│   ├── Men.tsx
│   ├── Women.tsx
│   ├── Kids.tsx
│   ├── HomeCollection.tsx
│   ├── Wishlist.tsx
│   ├── Bag.tsx
│   └── ProductDetails.tsx
├── context/
│   ├── ShopContext.tsx
│   └── ThemeContext.tsx
├── data/
│   └── products.ts
├── layouts/
│   └── MainLayout.tsx
├── types/
│   └── product.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Development Rules

Build incrementally:

1.  Project structure
2.  Global CSS
3.  Header
4.  Footer
5.  MainLayout
6.  TypeScript types
7.  Product data
8.  ProductCard
9.  ProductGrid
10. Home
11. React Router
12. Collection pages
13. Product Details
14. ShopContext
15. Wishlist
16. Shopping Bag
17. Quantity
18. Snackbar
19. Theme
20. Search
21. localStorage
22. Mobile optimization
23. Final QA

After every stage, explain what was created, the React/TypeScript
concepts used, and how to test it. Do not rewrite unrelated working code
or install unnecessary packages. Avoid `any` unless necessary.

## Reference Screenshot Workflow

Keep the provided screenshots as UI references. A recommended local
folder is:

``` text
reference/
├── home.png
├── men.png
├── women.png
├── home-collection.png
├── wishlist.png
├── bag.png
└── footer.png
```

When implementing a UI stage, attach the relevant screenshot(s) to
GitHub Copilot Chat if image attachments are supported, or reference the
local image files where supported.

The screenshots are design references, not production product images.

## Definition of Done

The project is complete when Header, Footer, Home, collection pages,
Product Details, Wishlist, Bag, quantity updates, price calculations,
Snackbar, Search, Light/Dark theme, localStorage, routing,
desktop/tablet/mobile layouts, and TypeScript checks all work without
major console or runtime errors.
