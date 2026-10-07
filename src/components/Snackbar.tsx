import { Check, X } from 'lucide-react'
import { useShop } from '../context/useShop'

export default function Snackbar() {
  const { notice, dismissNotice } = useShop()
  if (!notice) return null
  return (
    <div className="snackbar" role="status" key={notice.id}>
      <span className="snackbar-check"><Check size={18} /></span>
      <span>{notice.message}</span>
      <button type="button" aria-label="Dismiss notification" onClick={dismissNotice}><X size={18} /></button>
    </div>
  )
}
