import {
  Box, Button, Flex, Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const addCount = () => {
    if (count < stock && stock > 0) setCount(count + 1);
  };

  const subtractionCount = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <Box borderWidth="2px" borderColor="gray.300" p={4} mt={5}>
      <Flex justifyContent="center" alignItems="center" mb={2}>
        <Button size="sm" onClick={subtractionCount} colorScheme="blue">
          -
        </Button>
        <Text mx={2.5} fontSize="lg">
          {count}
        </Text>
        <Button size="sm" onClick={addCount} colorScheme="blue">
          +
        </Button>
      </Flex>
      <Button onClick={() => addToCart(count)} colorScheme="blue">
        Add to cart
      </Button>
      <Text mt={2}>
        Available stock:
        {' '}
        {stock}
      </Text>
    </Box>
  );
};

export default ItemCount;
