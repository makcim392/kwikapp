import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt="" />
      <div>
        <h2>{item.title}</h2>
        <h4>
          $
          {item.price}
          .-
        </h4>
        <h5>
          #
          {item.category}
        </h5>
        <Link
          to={`/item/${item.id}`}
          style={{ textDecoration: 'none' }}
        >
          <Button>Ver detalles</Button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
