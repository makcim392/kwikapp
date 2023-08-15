import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const products = [
    {
      id: 1, name: 'Product A', description: 'Product A description', stock: 5, category: 'category1', price: 100, pictureUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2, name: 'Product B', description: 'Product B description', stock: 2, category: 'category2', price: 100, pictureUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3, name: 'Product C', description: 'Product C description', stock: 3, category: 'category3', price: 100, pictureUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4, name: 'Product D', description: 'Product D description', stock: 4, category: 'category1', price: 100, pictureUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5, name: 'Product E', description: 'Product E description', stock: 9, category: 'category2', price: 100, pictureUrl: 'https://via.placeholder.com/150',
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

  useEffect(() => {
    getProducts.then((res) => {
      const filteredItems = res.filter((p) => p.id === parseInt(id, 10));
      setItem(filteredItems[0]);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }, [id]);

  console.log('product sent from ItemDetailContainer: ', item);

  return (
    <>
      <ItemDetail
        product={item}
      />
    </>
  );
};

export default ItemDetailContainer;
