import React from 'react';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description 1',
    price: 100,
    pictureUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description 2',
    price: 200,
    pictureUrl: 'https://via.placeholder.com/150',
  },
];
const ItemListContainer = () => (
  <>
    <h1>Item Detail Container</h1>
    <>
      <h2>Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.pictureUrl} alt={product.title} />
          </li>
        ))}
      </ul>
    </>
  </>
);

ItemListContainer.propTypes = {
};

export default ItemListContainer;
