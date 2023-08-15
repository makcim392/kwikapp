import {
  Box,
  Button,
  Center, Image, Text, VStack,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
  const { addItem, getItemInCart, quantity } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  let { stock } = product;

  const addToCart = (qty) => {
    addItem(product, qty);
    setIsInCart(true);
  };

  const itemInCart = getItemInCart(product?.id);
  if (itemInCart) {
    stock = product.stock - quantity;
  }

  if (!product) {
    return (
      <div>
        Item not found.
      </div>
    );
  }

  console.log('product completo: ', product);

  console.log('stock de item detail:', stock);

  console.log('item cart: ', itemInCart);

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
            {product.price}
          </Text>
          {/* <Button mt="0.5rem" colorScheme="teal" size="sm">
            Add to cart
          </Button> */}
        </VStack>
        {isInCart ? (
          <Link to="/cart">
            <Button>
              Finish purchase
            </Button>
          </Link>
        ) : (
          <ItemCount addToCart={addToCart} stock={stock} />
        )}
      </Box>
    </Center>
  );
};

export default ItemDetail;
