import PropTypes from 'prop-types';
import React from 'react';

const ItemListContainer = ({ greeting }) => (
  <div>
    <h1>
      <h2>{greeting}</h2>
    </h1>
  </div>
);

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
