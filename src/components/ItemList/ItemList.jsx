import { Box } from '@chakra-ui/react';
import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  console.log('products in ItemList: ', products);
  return (
    <Box>
      {products.map((product) => {
        return <Item key={product?.id} item={product} />;
      })}
    </Box>
  );
};

export default ItemList;
