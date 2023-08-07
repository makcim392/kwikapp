import React from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemListContainer = ({ products }) => (
  <>
    <h1>Item Detail Container</h1>
    <>
      <h2>Products:</h2>
      {products.map((item) => (
        <ItemDetailContainer product={item} />
      ))}
    </>
  </>
);

ItemListContainer.propTypes = {
};

export default ItemListContainer;
