import { createContext, useState } from "react";
import data from "../../../data/data.json";
import { type Product, type CartItem, type CartOrder } from "../types";

type CartContextType = {
  productos: Product[];
  productsCart: CartItem[];
  cartOrder: CartOrder;
  total: number;
  addToCart: (p: Product) => void;
  decreaseFromCart: (p: Product) => void;
  removeFromCart: (p: Product) => void;
  confirmOrder: () => void;
  startNewOrder: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | null>(null);

export const CartProviders = ({ children }: { children: React.ReactNode }) => {
  const [productos] = useState<Product[]>(() =>
    data.map((p, index) => ({ ...p, id: index + 1 })),
  ); // lazy initializer

  const [productsCart, setProductsCart] = useState<CartItem[]>([]);
  const [cartOrder, setCartOrder] = useState<CartOrder>({
    items: [],
    total: 0,
  });

  function addToCart(product: Product) {
    setProductsCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (!exists) {
        return [...prev, { ...product, quantity: 1 }];
      }

      return prev.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
      );
    });
  }

  function decreaseFromCart(product: Product) {
    // Primero restamos una unidad y luego filtramos los que queden en 0
    setProductsCart((prev) =>
      prev
        .map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p,
        )
        .filter((p) => p.quantity > 0),
    );
  }

  function removeFromCart(product: Product) {
    setProductsCart((prev) => prev.filter((p) => p.id !== product.id));
  }

  const total = productsCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  ); // se recalcula en cada render

  function confirmOrder() {
    // "foto" del pedido al confirmar
    setCartOrder({ items: [...productsCart], total });
  }

  function startNewOrder() {
    // cierra el resumen y vacía el carrito
    setCartOrder({ items: [], total: 0 });
    setProductsCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        productos,
        productsCart,
        cartOrder,
        total,
        addToCart,
        decreaseFromCart,
        removeFromCart,
        confirmOrder,
        startNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};