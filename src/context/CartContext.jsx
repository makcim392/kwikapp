import React, { createContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [countCart, setCountCart] = useState(0);
  const [quantity, setQuantity] = useState(0);

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
    return itemsCart.find((e) => e.id === id);
  }

  // const purchaseMessage = () => {
  //   toast.success('Purchase sucessful!', {
  //     position: toast.POSITION.BOTTOM_RIGHT,
  //   });
  // };

  const clearCart = () => {
    setItemsCart([]);
    setCountCart(0);
    setTotalPrice(0);
  };

  const finishPurchase = () => {
    try {
    setItemsCart([]);
    setCountCart(0);
    setTotalPrice(0);
    // purchaseMessage();
    } catch (error) {
      console.log(error);
      toast.error('There was an error creating your order', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const contextValue = useMemo(() => ({
    addItem,
    itemsCart,
    clearCart,
    removeItem,
    getItemInCart,
    totalPrice,
    countCart,
    quantity,
    setQuantity,
    finishPurchase,
  }), [itemsCart]); // Only update contextValue when cartList changes

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
