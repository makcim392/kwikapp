import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from '../../context/CartContext';

const OrderComponent = () => {
  const cartContext = useContext(CartContext);
  const { createOrder } = cartContext;

  // const buyer = {
  //   name: 'John Doe',
  //   phone: '123-456-7890',
  //   email: 'john@example.com',
  // };

  // const items = [
  //   { id: 'item1', title: 'Item 1', price: 10 },
  //   { id: 'item2', title: 'Item 2', price: 15 },
  // ];

  // const order = {
  //   buyer,
  //   items,
  //    date: getDate(),
  //   total: 25,
  // };

  // const handleAddOrder = () => {
  //  try {
  //   finishPurchase();
  //   dispatch(addOrder(order));

  //   const db = getFirestore();
  //   const ordersCollection = collection(db, 'orders');

  //   addDoc(ordersCollection, order).then(({ id }) => {
  //     console.log('order id in add doc', id);
  //     dispatch(setOrderId(id));
  //   });

  //   // Programmatically navigate to the "/orderSummary" route
  //   navigate('/orderSummary');
  //  } catch (error) {
  //     console.log(error);
  //     toast.error('There was an error creating your order', {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //     });
  //   }
  // };

  return (
    <Link to="/orderSummary">
      <Button colorScheme="green" onClick={createOrder}>
        Finish purchase
      </Button>
    </Link>
  );
};

export default OrderComponent;
