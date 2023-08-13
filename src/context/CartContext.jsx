import React, { createContext, useMemo, useState } from 'react';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item, qty) => {
    const itemInCart = cartList.find((i) => i.id === item.id);
    if (itemInCart) {
      const updatedCart = cartList.map((i) => {
        if (i.id === item.id) {
          return { ...i, qty: i.qty + qty };
        }
        return i;
      });
      setCartList(updatedCart);
    } else {
      setCartList([...cartList, { ...item, qty }]);
    }
  };

  const removeList = () => {
  };

  const deleteItem = (id) => {
    const filtered = cartList.filter((item) => item.id !== id);
    setCartList(filtered);
  };

  const contextValue = useMemo(() => ({
    cartList, addToCart, removeList, deleteItem,
  }), [cartList]); // Only update contextValue when cartList changes

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
