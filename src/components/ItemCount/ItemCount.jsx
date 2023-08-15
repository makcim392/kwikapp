/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const addCount = () => {
    if (count < stock && stock > 0) setCount(count + 1);
  };

  const subtractionCount = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="border-solid border-2 mt-5">
        <div className="text-center p-4">
          <div className="mt-2">
            <button onClick={subtractionCount} className="bg-blue-300 p-2">
              -
            </button>
            <span className="m-2.5">{count}</span>
            <button onClick={addCount} className="bg-blue-300 p-2">
              +
            </button>
          </div>
          <button onClick={() => addToCart(count)}>
            Add to cart
          </button>
          <p>
            Available stock:
            {' '}
            {stock}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
