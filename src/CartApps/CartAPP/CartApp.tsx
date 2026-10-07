import { ProductList } from "./ProductList"
import { CartCheckOut } from "./CartCheckOut"
import { OrderConfirmed } from "./OrderConfirmed"
import  data  from "../../data/data.json"
import { useState } from "react"
import { type Product, type CartItem, type CartOrder } from "./types"


export const CartApp = () => {

  const [productos] = useState<Product[]>(() => data.map( (p,index) =>({...p, id : index + 1}))); //lazy initializer, le pasamos la ejecución de un map
  const [productsCart, setProductsCart] = useState<CartItem[]>([]);
  const [cartOrder, setCartOrder] = useState<CartOrder>({
    items: [],
    total: 0,
});


  function addToCart(product : Product) {

    const itemToBeAdded = productsCart.find( p => p.id === product.id);

    if(itemToBeAdded === undefined) {
        setProductsCart(prev => [...prev, { ...product, quantity: 1 }])
    } else {

      const newCart = productsCart.map( p => {
        
        if(product.id === p.id) {
          return {...p, quantity: p.quantity + 1 }
        } else {
          return p
        }
      })
      setProductsCart(newCart);

    }
  }


  function decreaseFromCart(product: Product) { //usamos el etsaod previo y primero restamos una unidad y leugo filtramos, si es -o = a 0 no se elimina
  setProductsCart(prev =>
    prev
    .map(p => p.id === product.id 
        ? {...p, quantity : p.quantity - 1, }
        : p
      )
      .filter(p => p.quantity > 0)
  )
}


  const total = productsCart.reduce((acc, item) => acc + (item.price * item.quantity), 0) // se recalcula en cada render

  function confirmOrder() { // "foto" del pedido al confirmar
    setCartOrder({ items: productsCart, total })
  }

  function startNewOrder() { // cierra el resumen y vacía el carrito
    setCartOrder({ items: [], total: 0 })
    setProductsCart([])
  }

  
  

  function removeFromCart(product: Product) {
    setProductsCart(prev => prev.filter(p => p.id !== product.id))
  }

 


  return (
    <>
    <main className='mx-auto grid max-w-[1440px] gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_384px] lg:items-start lg:p-20'>
      <section>
        <h1 className='mb-8 text-4xl font-bold text-[#260F08]'>Desserts</h1>
        <ProductList listaProductos={productos} onAdd={addToCart} onDecrease={decreaseFromCart}/>
      </section>
      <CartCheckOut listaProductos={productsCart} onRemove={removeFromCart} total={total} onConfirm={confirmOrder}/>
    </main>

    {cartOrder.items.length > 0 && (
      <OrderConfirmed order={cartOrder} onNewOrder={startNewOrder}/>
    )}


    </>

  )
}
