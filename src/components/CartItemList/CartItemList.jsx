import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import OrderComponent from '../OrderComponent/OrderComponent';

const CartItemList = () => {
  const cartContext = useContext(CartContext);

  const {
 itemsCart, clearCart, totalPrice,
} = cartContext;

  return (
    <VStack spacing={6} align="center">
      {itemsCart.length ? (
        <VStack spacing={4} w="100%" align="stretch">
          {itemsCart.map((p) => (
            <CartItem key={p.id} prod={p} />
          ))}
          <Box w="100%" p={4} mt={4} borderTop="1px solid #ccc">
            <Text fontSize="lg">
              Grand total: $
              {totalPrice}
            </Text>
            <HStack spacing={4} mt={4} justify="flex-end">
              <Button onClick={clearCart} colorScheme="red">
                Empty cart
              </Button>
              <Link to="/">
                {/* <Button colorScheme="green" onClick={finishPurchase}>
                  Finish purchase
                </Button> */}
                <OrderComponent />
              </Link>
            </HStack>
          </Box>
        </VStack>
      ) : (
        <VStack spacing={4} w="100%" align="center">
          <Text fontSize="lg">Cart has no products</Text>
          <Link to="/home">
            <Button colorScheme="blue">
              Home
            </Button>
          </Link>
        </VStack>
      )}
    </VStack>
  );
};

export default CartItemList;
