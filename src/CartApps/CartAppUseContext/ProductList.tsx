import { ProductCard } from './ProductCard'
import { useCart } from './Providers/useCart'

export const ProductList = ()  => {
  const { productos } = useCart()

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
      {productos.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
