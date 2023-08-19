import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import addOrder from '../../Redux/Order/OrderActions';
import CartContext from '../../context/CartContext';

const OrderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Get the history object

  const cartContext = useContext(CartContext);
  const { finishPurchase } = cartContext;

  const handleAddOrder = () => {
    const order = {
      buyer: {
        name: 'John Doe',
        phone: '123-456-7890',
        email: 'john@example.com',
      },
      items: [
        { id: 'item1', title: 'Item 1', price: 10 },
        { id: 'item2', title: 'Item 2', price: 15 },
      ],
      // date: new Date(),
      total: 25,
    };
    finishPurchase();
    dispatch(addOrder(order));

    // Programmatically navigate to the "/orderSummary" route
    navigate('/orderSummary');
  };

  return (
    <Button colorScheme="green" onClick={handleAddOrder}>
      Finish purchase
    </Button>
  );
};

export default OrderComponent;
