import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../mocks/async-mocks';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  console.log('category: ', category);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
      {products.map((item) => (
        <ItemDetailContainer key={item.id} product={item} categoryId={category} />
      ))}

    </SimpleGrid>
  );
};

export default ItemListContainer;
