import { useState } from 'react'
import type { Product } from './types'
import { useCart } from './Providers/useCart'

interface Props {
  product: Product
}

export const AddToCartBtn = ({ product }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const { productsCart, addToCart, decreaseFromCart } = useCart()

  // la cantidad sale del carrito, así se sincroniza al eliminar o empezar un pedido nuevo
  const quantity = productsCart.find((p) => p.id === product.id)?.quantity ?? 0

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
        <img src="/images/icon-add-to-cart.svg" alt="" />
        Add to Cart
      </button>

      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-between rounded-full bg-[#C73B0F] px-3 text-sm font-semibold text-white">
          <button type="button" aria-label={`Decrease ${product.name}`} className='flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-transparent p-0 transition-colors hover:bg-white/25' onClick={() => decreaseFromCart(product)}>
            <img src="/images/icon-decrement-quantity.svg" alt="" />
          </button>
          <span>{quantity}</span>
          <button type="button" aria-label={`Increase ${product.name}`} className='flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-transparent p-0 transition-colors hover:bg-white/25' onClick={() => addToCart(product)}>
            <img src="/images/icon-increment-quantity.svg" alt="" />
          </button>
        </div>
      )}
    </div>
  )
}
