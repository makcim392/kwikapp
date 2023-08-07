import {
  Box, Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const ItemDetailContainer = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
    <Image src={product.pictureUrl} alt={product.title} />
    <Heading as="h3" size="md" mt="2">
      {product.title}
    </Heading>
    <Text>{product.description}</Text>
    <Text fontWeight="bold" mt="2">
      $
      {product.price}
    </Text>
  </Box>
);

export default ItemDetailContainer;
