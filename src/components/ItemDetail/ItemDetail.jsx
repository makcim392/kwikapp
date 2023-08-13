import {
  Box, Center, Image, Text,
} from '@chakra-ui/react';
import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <Center height="100vh">
      <Box p={6} borderWidth="1px" borderRadius="md" boxShadow="lg">
        <Text fontSize="xl" fontWeight="semibold" marginBottom="0.5rem">
          {product.name}
        </Text>
        <Text fontSize="md" color="gray.600" marginBottom="0.5rem">
          {product.description}
        </Text>
        <Text fontSize="lg" color="teal.500" fontWeight="semibold">
          Price: $
          {product.price.toFixed(2)}
        </Text>
        <Image src={product.pictureUrl} alt={product.name} />
      </Box>
    </Center>
  );
};

export default ItemDetail;
