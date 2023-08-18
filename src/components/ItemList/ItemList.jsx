import { Box } from '@chakra-ui/react';
import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  const generateRandomId = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 24; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters[randomIndex];
    }
    return randomId;
  };

  const filteredProducts = products.map((product) => ({
    ...product,
    id: product.id || generateRandomId(),
  }));

    return (
      <Box>
        {filteredProducts.map((product) => (
          <Item key={product.id} item={product} />
        ))}
      </Box>
    );
};

export default ItemList;
