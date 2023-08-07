import React from 'react';

const ItemDetailContainer = ({ products }) => (
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

export default ItemDetailContainer;
