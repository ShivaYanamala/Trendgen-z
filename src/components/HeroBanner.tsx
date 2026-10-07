import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface HeroBannerProps {
  eyebrow: string
  title: string
  description: string
  image: string
  variant?: string
  link?: string
  linkLabel?: string
  homeHero?: boolean
}

export default function HeroBanner({ eyebrow, title, description, image, variant = '', link, linkLabel = 'EXPLORE', homeHero = false }: HeroBannerProps) {
  return (
    <section className={`hero-banner ${variant} ${homeHero ? 'home-hero' : ''}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(14, 24, 20, .72), rgba(14, 24, 20, .1)), url("${image}")` }}>
      <div className="hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {homeHero && <p className="hero-manifesto">Fashion <i /> Comfort <i /> Expression</p>}
        <p className="hero-description">{description}</p>
        {link && <Link className="hero-link" to={link}>{linkLabel}<ArrowDownRight size={18} /></Link>}
      </div>
      <span className="hero-index" aria-hidden="true">TRENDGEN-Z / 2026</span>
      <span className="hero-orbit" aria-hidden="true" />
      {homeHero && <span className="hero-caption">DRESS FOR YOUR OWN STORY <ArrowUpRight size={14} /></span>}
    </section>
  )
}
