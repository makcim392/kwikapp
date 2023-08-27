import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from '../../context/CartContext';

const OrderComponent = () => {
  const cartContext = useContext(CartContext);
  const { createOrder } = cartContext;
  const navigate = useNavigate();

  const sendCreateOrder = async () => {
    try {
      createOrder();
      navigate('/orderSummary');
    } catch (error) {
      console.log(error);
      toast.error('There was an error creating your order', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <Button colorScheme="green" onClick={sendCreateOrder}>
      Finish purchase
    </Button>
  );
};

export default OrderComponent;
