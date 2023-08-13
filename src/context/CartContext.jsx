import React, { createContext, useState } from 'react';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item, qty) => { // implementa la funcionalidad para agregar un producto al carrito
  };
  const removeList = () => {
  };
  const deleteItem = (id) => {
    const filtered = cartList.filter((item) => item.id !== id);
    setCartList(filtered);
  };
  return (
    <CartContext.Provider value={{
      cartList, addToCart, removeList, deleteItem,
    }}
    >
      { children }
    </CartContext.Provider>
  );
};
export default CartContextProvider;
