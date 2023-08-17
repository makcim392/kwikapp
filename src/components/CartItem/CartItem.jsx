import {
  Button,
  Image, Text, VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartItem = ({ prod: p }) => {
  const cartContext = useContext(CartContext);
  const { removeItem } = cartContext;

  return (
    <VStack
      spacing={4}
      p={4}
      border="2px solid"
      borderColor="gray.100"
      align="center"
    >
      <Image src={p?.pictureUrl} alt="imagen" w="20" h="20" objectFit="cover" />
      <Text fontSize="2xl">{p?.name}</Text>
      <Text>
        Quantity:
        {' '}
        {p.qty}
      </Text>
      <Text>
        $
        {p.price}
      </Text>
      <Button
        onClick={() => removeItem(p, p?.qty)}
        colorScheme="red"
        variant="outline"
      >
        Remove product
      </Button>
    </VStack>
  );
};

export default CartItem;
