import React from 'react';

const ItemList = ({ products }) => {
  return (
    <div>
      ItemList works!
      Products:
      {' '}
      {products.length}
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
