import { useCart } from "./Providers/useCart"

export const OrderConfirmed = () => {
  const { cartOrder: order, startNewOrder: onNewOrder } = useCart()

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
      <div className="flex w-full max-w-lg flex-col gap-6 rounded-t-xl bg-white p-6 text-left sm:rounded-xl sm:p-10">
        <img src="images/icon-order-confirmed.svg" alt="" className="h-12 w-12" />

        <div>
          <h2 className="m-0 text-4xl font-bold text-[#260F08]">Order Confirmed</h2>
          <p className="mt-2 text-[#87635A]">We hope you enjoy your food!</p>
        </div>

        <div className="rounded-lg bg-[#FCF8F6] p-6">
          <ul className="m-0 flex max-h-72 list-none flex-col overflow-y-auto p-0">
            {order.items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 border-b border-[#F5EEEC] py-4 first:pt-0"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image.thumbnail} alt="" className="h-12 w-12 rounded" />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-[#260F08]">{item.name}</p>
                    <div className="flex gap-2 text-sm">
                      <span className="font-semibold text-[#C73B0F]">{item.quantity}x</span>
                      <span className="text-[#87635A]">@ ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <span className="font-semibold text-[#260F08]">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-6">
            <span className="text-sm text-[#260F08]">Order Total</span>
            <span className="text-2xl font-bold text-[#260F08]">${order.total.toFixed(2)}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onNewOrder}
          className="w-full cursor-pointer rounded-full border-none bg-[#C73B0F] py-4 font-semibold text-white transition-colors hover:bg-[#952C0B]"
        >
          Start New Order
        </button>
      </div>
    </div>
  )
}
