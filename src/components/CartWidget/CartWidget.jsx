/* eslint-disable react/function-component-definition */
import { Button } from '@chakra-ui/react';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => (
  <Button>
    <div>
      <Link to="/cart">
        <FontAwesomeIcon icon={icon({ name: 'cart-shopping' })} />
      </Link>
    </div>
    <div>
      4
    </div>
  </Button>
);

export default CartWidget;
