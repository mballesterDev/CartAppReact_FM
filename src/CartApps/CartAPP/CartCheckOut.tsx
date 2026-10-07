import type { CartItem, Product } from "./types"

interface Props {
  listaProductos: CartItem[]
  onRemove: (product: Product) => void
  total: number
  onConfirm: () => void
}

export const CartCheckOut = ({ listaProductos, onRemove, total, onConfirm }: Props) => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-xl bg-white p-6 text-left">
      <h2 className="m-0 text-2xl font-bold text-[#C73B0F]">
        Your Cart ({listaProductos.length})
      </h2>

      {listaProductos.length > 0 ? (
        <>
          <ul className="m-0 flex list-none flex-col p-0">
            {listaProductos.map((producto) => (
              <li
                key={producto.id ?? producto.name}
                className="flex items-center justify-between border-b border-[#F5EEEC] py-4"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-[#260F08]">{producto.name}</p>
                  <div className="flex gap-2 text-sm">
                    <span className="font-semibold text-[#C73B0F]">{producto.quantity}x</span>
                    <span className="text-[#AD8A85]">@ ${producto.price.toFixed(2)}</span>
                    <span className="font-semibold text-[#87635A]">${(producto.price * producto.quantity).toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label={`Remove ${producto.name}`}
                  onClick={() => onRemove(producto)}
                  className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-[#AD8A85] bg-transparent p-0 transition-colors hover:border-[#260F08]"
                >
                  <img src="images/icon-remove-item.svg" alt="" className="h-2.5 w-2.5" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <span className="text-sm text-[#260F08]">Order Total</span>
            <span className="text-2xl font-bold text-[#260F08]">${total.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-lg bg-[#FCF8F6] p-4 text-sm text-[#260F08]">
            <img src="images/icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <span className="font-semibold">carbon-neutral</span> delivery
            </p>
          </div>

          <button
            type="button"
            onClick={onConfirm}
            className="w-full cursor-pointer rounded-full border-none bg-[#C73B0F] py-4 font-semibold text-white transition-colors hover:bg-[#952C0B]"
          >
            Confirm Order
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4 py-6">
          <img src="images/illustration-empty-cart.svg" alt="" />
          <p className="text-sm font-semibold text-[#87635A]">Your added items will appear here</p>
        </div>
      )}
    </div>
  )
}
