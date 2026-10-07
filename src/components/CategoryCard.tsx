import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CategoryCardProps {
  title: string
  offer: string
  image: string
  to: string
  index: string
}

export default function CategoryCard({ title, offer, image, to, index }: CategoryCardProps) {
  return (
    <Link className="category-card" to={to}>
      <div className="category-image"><img src={image} alt={title} loading="lazy" /><span className="category-index">{index}</span><span className="category-arrow"><ArrowUpRight size={18} /></span></div>
      <div className="category-info"><span>{title}</span><strong>{offer}</strong><span className="shop-now">SHOP NOW</span></div>
    </Link>
  )
}
