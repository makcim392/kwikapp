import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const ItemDetail = ({ product }) => {
  console.log('item recibido en ItemDetail:', product);

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" marginBottom="0.5rem">
        Name:
        {' '}
        {product.name}
      </Text>
      <Text fontSize="md" color="gray.600">
        Description:
        {' '}
        {product.description}
      </Text>
      <Text fontSize="lg" color="teal.500" fontWeight="bold">
        Price: $
        {product.price.toFixed(2)}
      </Text>
    </Box>
  );
};

export default ItemDetail;
