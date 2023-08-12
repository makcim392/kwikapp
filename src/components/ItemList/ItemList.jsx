import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ItemList = ({ products }) => {
  return (
    <Box>
      <VStack spacing={4} align="start">
        {products.map((product) => (
          <Box key={product.id} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Text fontSize="lg" fontWeight="semibold">
              {product.title}
            </Text>
            <Text>{product.description}</Text>
            <Text fontSize="lg" fontWeight="bold">
              $
              {product.price}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ItemList;
