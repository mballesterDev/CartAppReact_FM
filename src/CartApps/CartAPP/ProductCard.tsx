import type { Product } from "./types"
import { AddToCartBtn } from './AddToCartBtn'

interface props {
    product : Product
    onAdd : (product: Product) => void
    onDecrease : (product: Product) => void
}


export const ProductCard = ({product, onAdd, onDecrease} : props) => {




  return (
    <article className="flex flex-col">
        <div className="relative mb-10">
          <picture>
            <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
            <source media="(min-width: 640px)" srcSet={product.image.tablet} />
            <img src={product.image.mobile} alt={product.name} className="w-full rounded-lg" />
          </picture>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <AddToCartBtn product={product} onAdd={onAdd} onDecrease={onDecrease}/>
          </div>
        </div>
        <p className="text-sm text-[#87635A]">{product.category}</p>
        <p className="font-semibold text-[#260F08]">{product.name}</p>
        <p className="font-semibold text-[#C73B0F]">${product.price.toFixed(2)}</p>
    </article>
  )
}
