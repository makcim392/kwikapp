import {
  Box,
  Button,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = ({ product }) => {
  const { item } = useParams();

  console.log('product al entrar a item detail: ', product);

  if (!product) {
    return (
      <>
        Product not found
      </>
    );
  }

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
      <Link to={`/item/${item}`}>
        <Button>
          Go to Product
        </Button>
      </Link>
    </Box>
  );
};

export default ItemDetailContainer;
