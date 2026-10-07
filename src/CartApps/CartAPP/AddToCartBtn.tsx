import { useState } from 'react'
import type { Product } from './types'

interface Props {
  product: Product
  onAdd: (product: Product) => void
  onDecrease: (product: Product) => void
}

export const AddToCartBtn = ({ product, onAdd, onDecrease }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [quantity, setQuantity] = useState(0)

  return (
    <div
      className="relative h-11 w-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        className="flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#AD8A85] bg-white text-sm font-semibold text-[#260F08] transition-colors hover:border-[#C73B0F] hover:text-[#C73B0F]"
      >
        <img src="images/icon-add-to-cart.svg" alt="" />
        Add to Cart
      </button>

      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-between rounded-full bg-[#C73B0F] px-3 text-sm font-semibold text-white">
          <button type="button" aria-label={`Decrease ${product.name}`} className='flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-transparent p-0 transition-colors hover:bg-white/25' onClick={() => { setQuantity(Math.max(0, quantity - 1)); onDecrease(product) }}>
            <img src="images/icon-decrement-quantity.svg" alt="" />
          </button>
          <span>{quantity}</span>
          <button type="button" aria-label={`Increase ${product.name}`} className='flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-transparent p-0 transition-colors hover:bg-white/25' onClick={() => { setQuantity(quantity + 1); onAdd(product) }}>
            <img src="images/icon-increment-quantity.svg" alt="" />
          </button>
        </div>
      )}
    </div>
  )
}
