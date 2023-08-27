import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [countCart, setCountCart] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [orderId, setOrderId] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (orderId) {
      dispatch(setOrderId(orderId));
    }
  }, [orderId, dispatch]);

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

  const getDate = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return `${formattedDate}-${formattedTime}`;
    };

    const calculateTotal = () => {
      const grandTotal = itemsCart.reduce((total, item) => {
        const subtotal = item.price * item.qty;
        return total + subtotal;
      }, 0);

      return grandTotal;
    };

  const buyer = {
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john@example.com',
  };

  const order = {
    buyer,
    itemsCart,
     date: getDate(),
    total: calculateTotal(),
  };

  const createOrder = () => {
    try {
     finishPurchase();

     const db = getFirestore();
     const ordersCollection = collection(db, 'orders');

     addDoc(ordersCollection, order).then(({ id }) => {
       console.log('order id in add cart context', id);
       setOrderId(id);
     });
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
    createOrder,
    orderId,
  }), [itemsCart]); // Only update contextValue when cartList changes

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
