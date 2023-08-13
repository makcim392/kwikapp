import {
  Box,
  Button,
  Center, Image, Text, VStack,
} from '@chakra-ui/react';
import React from 'react';

const ItemDetail = ({ product }) => {
  if (!product) {
    return (
      <div>
        Item not found.
      </div>
    );
  }

  return (
    <Center height="100vh">
      <Box p={6} borderWidth="1px" borderRadius="md" boxShadow="lg">
        <VStack spacing={4} align="stretch">
          <Image src={product.pictureUrl} alt={product.name} objectFit="contain" maxHeight="60vh" />
          <Text fontSize="2xl" fontWeight="semibold">
            {product.name}
          </Text>
          <Text fontSize="lg" color="gray.600">
            {product.description}
          </Text>
          <Text fontSize="xl" color="teal.500" fontWeight="semibold">
            Price: $
            {product.price.toFixed(2)}
          </Text>
          <Button mt="0.5rem" colorScheme="teal" size="sm">
            Add to cart
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default ItemDetail;
