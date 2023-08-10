import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const products = [
    {
      id: 1, name: 'Product A', description: 'Product A description', stock: 5, category: 'category1',
    },
    {
      id: 2, name: 'Product B', description: 'Product B description', stock: 5, category: 'category2',
    },
    {
      id: 3, name: 'Product C', description: 'Product C description', stock: 5, category: 'category3',
    },
    {
      id: 4, name: 'Product D', description: 'Product D description', stock: 5, category: 'category1',
    },
    {
      id: 5, name: 'Product E', description: 'Product E description', stock: 5, category: 'category2',
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

  getProducts.then(() => {

  }).catch((err) => {
    console.log(err);
  });

  return (
    <>
      <ItemDetail
        products={products}
      />
    </>

  );
};

export default ItemDetailContainer;
