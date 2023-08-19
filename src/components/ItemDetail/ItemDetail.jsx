import {
  Box,
  Button,
  Center, Image, Text, VStack,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
  const { addItem, getItemInCart, quantity } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  if (!product || typeof product?.stock !== 'number') {
    return (
      <div>
        Invalid product data.
      </div>
    );
  }

  let { stock } = product;

  const addToCart = (qty) => {
    addItem(product, qty);
    setIsInCart(true);

    // const dispatch = useDispatch();

    // dispatch(addOrder(product, qty));
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

  return (
    <Center height="100vh">
      <Box p={6} borderWidth="1px" borderRadius="md" boxShadow="lg">
        <VStack spacing={4} align="stretch">
          <Image src={product?.pictureUrl} alt={product?.name} objectFit="contain" maxHeight="60vh" />
          <Text fontSize="2xl" fontWeight="semibold">
            {product?.name}
          </Text>
          <Text fontSize="lg" color="gray.600">
            {product?.description}
          </Text>
          <Text fontSize="xl" color="teal.500" fontWeight="semibold">
            Price: $
            {product?.price}
          </Text>
        </VStack>
        {isInCart ? (
          <Link to="/cart">
            <Button>
              Add items to cart
              {' '}
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
