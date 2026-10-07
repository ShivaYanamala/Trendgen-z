import { useParams } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'
import type { ProductCategory } from '../types/product'

const collectionDetails: Record<ProductCategory, { label: string; eyebrow: string; title: string; description: string; image: string; variant: string }> = {
  men: { label: "Men's collection", eyebrow: 'TRENDGEN-Z / MEN', title: 'Modern essentials', description: 'Designed for confidence. Made for every day.', image: 'photo-1515886657613-9f3515b0c78f', variant: 'hero-men' },
  women: { label: "Women's collection", eyebrow: 'TRENDGEN-Z / WOMEN', title: 'Effortless elegance', description: 'Pieces with a point of view, made to move with you.', image: 'photo-1539109136881-3be0616acf4b', variant: 'hero-women' },
  kids: { label: "Kids' collection", eyebrow: 'TRENDGEN-Z / KIDS', title: 'Little big days', description: 'Colorful comfort for all the ways they grow.', image: 'photo-1519238263530-99bdd11df2ea', variant: 'hero-kids' },
  home: { label: 'Home collection', eyebrow: 'TRENDGEN-Z / HOME', title: 'Beauty for every space', description: 'Thoughtful everyday pieces for a home that feels like yours.', image: 'photo-1616486338812-3dadae4b4ace', variant: 'hero-home' },
}

export default function CollectionPage({ category }: { category: ProductCategory }) {
  const { q } = useParams()
  const details = collectionDetails[category]
  const collectionProducts = products.filter((product) => product.category === category && (!q || product.name.toLowerCase().includes(q.toLowerCase())))
  return (
    <>
      <HeroBanner {...details} image={`https://images.unsplash.com/${details.image}?auto=format&fit=crop&w=2000&q=85`} />
      <section className="content-section collection-section">
        <div className="collection-heading"><div><span className="eyebrow">THE TRENDGEN-Z EDIT</span><h2>{details.label}</h2></div><span className="product-count">{collectionProducts.length} PRODUCTS</span></div>
        <ProductGrid products={collectionProducts} />
      </section>
    </>
  )
}
