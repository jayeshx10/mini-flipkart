import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateCart = (item) => {
    setCart((prevCart) => {
      // console.log(prevCart);
      return [...prevCart, item];
    });
  };

  const deleteProductFromCart = (keyId) => {
    const updatedCartAfterDeletion = cart.filter(({ id }) => id !== keyId);
    setCart(updatedCartAfterDeletion);
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, deleteProductFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
