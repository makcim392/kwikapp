import {
  Box,
  Button,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = ({ product }) => {
  const showToast = () => {
    toast('This is a pop-up message!', { position: 'top-center' });
  };

  return (
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
      <Button colorScheme="teal" size="md" onClick={() => showToast()}>
        Detail
      </Button>
    </Box>
  );
};

export default ItemDetailContainer;
