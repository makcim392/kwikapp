/* eslint-disable react/function-component-definition */
import { Button } from '@chakra-ui/react';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
  const { countCart } = useContext(CartContext);

  return (
    <Button>
      <div>
        <Link to="/cart">
          <FontAwesomeIcon icon={icon({ name: 'cart-shopping' })} />
        </Link>
      </div>
      <div>
        {countCart}
      </div>
    </Button>
  );
};
export default CartWidget;
