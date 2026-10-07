import { useContext } from "react";
import { CartContext } from "./CartProviders";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de <CartProviders>");
  }

  return context;
};
