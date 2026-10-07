import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useShop } from '../context/useShop'

const columns = [
  { title: 'SHOP', links: [{ label: 'Men', to: '/men' }, { label: 'Women', to: '/women' }, { label: 'Home', to: '/home' }, { label: 'Kids', to: '/kids' }, { label: 'New Arrivals', to: '/' }, { label: 'Best Sellers', to: '/' }] },
  { title: 'CUSTOMER CARE', links: ['Contact Us', 'FAQ', 'Shipping', 'Returns', 'Track Order'].map((label) => ({ label, to: '#' })) },
  { title: 'ABOUT TRENDGEN-Z', links: ['Our Story', 'Careers', 'Privacy Policy', 'Terms & Conditions', 'Sustainability'].map((label) => ({ label, to: '#' })) },
]

export default function Footer() {
  const { notify } = useShop()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    if (!subscribed) return
    const timeoutId = window.setTimeout(() => setSubscribed(false), 2600)
    return () => window.clearTimeout(timeoutId)
  }, [subscribed])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
    setEmail('')
    notify('Thank you for subscribing!')
  }

  return (
    <footer className="site-footer">
      <div className="footer-main">
        {columns.map((column) => (
          <section className="footer-column" key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map((link) => link.to === '#' ? <a key={link.label} href="#newsletter">{link.label}</a> : <Link key={link.label} to={link.to}>{link.label}</Link>)}
          </section>
        ))}
        <section className="footer-column footer-social">
          <h2>FOLLOW US</h2>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={13} /></a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest <ArrowUpRight size={13} /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={13} /></a>
        </section>
      </div>
      <section className="newsletter" id="newsletter">
        <div><span className="eyebrow">A LITTLE GOOD NEWS</span><h2>Stay in the Trendgen-Z loop.</h2><p>Get updates on new collections, exclusive offers and more.</p></div>
        <form onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setSubscribed(false)
            }}
            placeholder="Enter your email"
            required
          />
          <button type="submit">{subscribed ? 'THANK YOU' : 'SUBSCRIBE'} <ArrowUpRight size={15} /></button>
        </form>
      </section>
      <div className="footer-bottom"><span>© 2026 Trendgen-Z. All rights reserved.</span><span>Made for your everyday story.</span></div>
    </footer>
  )
}
