import { Minus, Plus } from 'lucide-react'

interface QuantityControlProps {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}

export default function QuantityControl({ quantity, onDecrease, onIncrease }: QuantityControlProps) {
  return (
    <div className="quantity-control" aria-label="Quantity controls">
      <button type="button" aria-label="Decrease quantity" disabled={quantity <= 1} onClick={onDecrease}><Minus size={14} /></button>
      <span aria-live="polite">{quantity}</span>
      <button type="button" aria-label="Increase quantity" onClick={onIncrease}><Plus size={14} /></button>
    </div>
  )
}
