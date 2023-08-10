import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../mocks/async-mocks';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <ItemList
      products={filteredProducts}
    />
  );
};

export default ItemListContainer;
