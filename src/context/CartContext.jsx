import React, { createContext, useMemo, useState } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [countCart, setCountCart] = useState(0);

  function isItemInCart(id) {
    return itemsCart.some((e) => e.id === id);
  }

  const addItem = (item, qty) => {
    if (isItemInCart(item.id)) {
      const index = itemsCart.findIndex((i) => i.id === item.id);
      const copyCart = [...itemsCart];
      copyCart[index].qty += qty;
      setItemsCart(copyCart);
      setCountCart(countCart + qty);
      setTotalPrice(totalPrice + item.price * qty);
    } else {
      const itemToAdd = { ...item, qty };
      setItemsCart([...itemsCart, itemToAdd]);
      setCountCart(countCart + qty);
      setTotalPrice(totalPrice + item.price * qty);
    }
  };

  function removeItem(item, qty) {
    let itemToRemove = itemsCart;
    itemToRemove = itemToRemove.filter((e) => e.id !== item.id);
    setItemsCart(itemToRemove);
    setCountCart(countCart - qty);
    setTotalPrice(totalPrice - item.price * qty);
  }

  function getItemInCart(id) {
    console.log('getItemInCart in CartContext', id);
    return itemsCart.find((e) => e.id === id);
  }

  const clearCart = () => {
    setItemsCart([]);
    setCountCart(0);
    setTotalPrice(0);
  };

  const contextValue = useMemo(() => ({
    addItem, itemsCart, clearCart, removeItem, getItemInCart, totalPrice, countCart,
  }), [itemsCart]); // Only update contextValue when cartList changes

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
