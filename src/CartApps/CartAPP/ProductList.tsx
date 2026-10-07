import type { Product } from './types'
import { ProductCard } from './ProductCard'

interface Props {
  listaProductos : Product[]
  onAdd : (product: Product) => void
  onDecrease : (product: Product) => void
}
export const ProductList = ({listaProductos, onAdd, onDecrease} : Props)  => {

//

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
      {listaProductos.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} onDecrease={onDecrease} />
      ))}
    </div>
  )
}
