import { Button } from '@chakra-ui/react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addOrder, { setOrderId } from '../../Redux/Order/OrderActions';
import CartContext from '../../context/CartContext';

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

const OrderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Get the history object

  const cartContext = useContext(CartContext);
  const { finishPurchase } = cartContext;

  const buyer = {
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john@example.com',
  };

  const items = [
    { id: 'item1', title: 'Item 1', price: 10 },
    { id: 'item2', title: 'Item 2', price: 15 },
  ];

  const order = {
    buyer,
    items,
     date: getDate(),
    total: 25,
  };

  const handleAddOrder = () => {
   try {
    finishPurchase();
    dispatch(addOrder(order));

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    addDoc(ordersCollection, order).then(({ id }) => {
      console.log('order id in add doc', id);
      dispatch(setOrderId(id));
    });

    // Programmatically navigate to the "/orderSummary" route
    navigate('/orderSummary');
   } catch (error) {
      console.log(error);
      toast.error('There was an error creating your order', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <Button colorScheme="green" onClick={handleAddOrder}>
      Finish purchase
    </Button>
  );
};

export default OrderComponent;
