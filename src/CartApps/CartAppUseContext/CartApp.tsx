import { ProductList } from "./ProductList"
import { CartCheckOut } from "./CartCheckOut"
import { OrderConfirmed } from "./OrderConfirmed"
import { useCart } from "./Providers/useCart"



export const CartApp = () => {


  const { cartOrder } = useCart();


  return (
    <>
    <main className='mx-auto grid max-w-[1440px] gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_384px] lg:items-start lg:p-20'>
      <section>
        <h1 className='mb-8 text-4xl font-bold text-[#260F08]'>Desserts</h1>
        <ProductList/>
      </section>
      <CartCheckOut />
    </main>

    {cartOrder.items.length > 0 && (
      <OrderConfirmed />
    )}


    </>

  )
}
