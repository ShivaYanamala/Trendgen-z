import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import HeroBanner from '../components/HeroBanner'
import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'

const categories = [
  { title: 'Ethnic Wear', offer: '50–80% off', image: 'photo-1496747611176-843222e1e57c', to: '/women' },
  { title: 'Casual Wear', offer: '30–70% off', image: 'photo-1515886657613-9f3515b0c78f', to: '/men' },
  { title: "Men's Activewear", offer: '20–60% off', image: 'photo-1534438327276-14e5300c3a48', to: '/men' },
  { title: "Women's Activewear", offer: '25–65% off', image: 'photo-1518611012118-696072aa579a', to: '/women' },
  { title: 'Western Wear', offer: '15–50% off', image: 'photo-1539109136881-3be0616acf4b', to: '/women' },
  { title: 'Sportswear', offer: '10–40% off', image: 'photo-1538805060514-97d9cc17730c', to: '/men' },
  { title: 'Loungewear', offer: '5–30% off', image: 'photo-1483985988355-763728e1935b', to: '/women' },
  { title: 'Beauty & Makeup', offer: 'Up to 60% off', image: 'photo-1596462502278-27bfdc403348', to: '/home' },
]

const categoryPhotos = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=850&q=85`

export default function Home() {
  const featured = [products[8], products[0], products[24], products[16]]
  return (
    <>
      <HeroBanner
        eyebrow="THE NEW ERA OF EVERYDAY STYLE"
        title="Trendgen-Z"
        description="Discover pieces made for your own story."
        image="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2200&q=90"
        homeHero
        link="#shop-by-category"
        linkLabel="EXPLORE"
      />
      <section className="content-section category-section" id="shop-by-category">
        <div className="section-heading"><div><span className="eyebrow">FIND YOUR SOMETHING</span><h2>Shop by category</h2></div><p>Good things for every version of you.</p></div>
        <div className="category-grid">{categories.map((category, index) => <CategoryCard key={category.title} {...category} image={categoryPhotos(category.image)} index={`0${index + 1}`} />)}</div>
      </section>
      <section className="content-section featured-section">
        <div className="section-heading"><div><span className="eyebrow">THE CURRENT EDIT</span><h2>Pieces to live in</h2></div><Link className="text-link" to="/women">Explore the edit <ArrowRight size={17} /></Link></div>
        <ProductGrid products={featured} />
      </section>
      <section className="home-note"><span className="eyebrow">STYLE THAT FEELS LIKE YOU</span><p>Less rules. More <em>you.</em></p><Link to="/men">Find your next favorite <ArrowRight size={16} /></Link></section>
    </>
  )
}
