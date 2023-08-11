import React from 'react';

const ItemDetail = ({ products }) => {
  return (
    <div>
      <h2>Item Detail</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>
              Name:
              {product.name}
            </p>
            <p>
              Description
              {product.description}
            </p>
            <p>
              Price: $
              {product.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemDetail;
