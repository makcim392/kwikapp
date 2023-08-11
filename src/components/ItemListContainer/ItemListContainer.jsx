import React from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const products = [
    {
      id: 1, name: 'Product A', description: 'Product A description', stock: 5, category: 'category1', price: 100,
    },
    {
      id: 2, name: 'Product B', description: 'Product B description', stock: 5, category: 'category2', price: 100,
    },
    {
      id: 3, name: 'Product C', description: 'Product C description', stock: 5, category: 'category3', price: 100,
    },
    {
      id: 4, name: 'Product D', description: 'Product D description', stock: 5, category: 'category1', price: 100,
    },
    {
      id: 5, name: 'Product E', description: 'Product E description', stock: 5, category: 'category2', price: 100,
    },
  ];

  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject(new Error('No data'));
    }
  });

  getProducts
    .then(() => {

    })
    .catch((err) => {
      console.log(err);
    });

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <ItemList
      products={filteredProducts}
    />
  );
};

export default ItemListContainer;
