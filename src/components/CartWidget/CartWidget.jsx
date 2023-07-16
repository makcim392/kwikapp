/* eslint-disable react/function-component-definition */
import { Button } from '@chakra-ui/react';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartWidget = () => (
  <Button>
    <div>
      <FontAwesomeIcon icon={icon({ name: 'cart-shopping' })} />
    </div>
    <div>
      4
    </div>
  </Button>
);

export default CartWidget;
