import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemListContainer = ({ products }) => (

  <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
    {products.map((item) => (
      <ItemDetailContainer key={item.id} product={item} />
    ))}
  </SimpleGrid>
);

ItemListContainer.propTypes = {
};

export default ItemListContainer;
