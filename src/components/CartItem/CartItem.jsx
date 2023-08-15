import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

export const CartItem = ({ prod: p }) => {
  const cartContext = useContext(CartContext);

  const { removeItem } = cartContext;

  return (
    <div className="m-4 border-solid border-b-2 border-gray-100 p-4">
      <div className="flex justify-evenly items-center my-2">
        <img src={p.pictureUrl} alt="imagen" className="w-20 h-20 object-cover" />
        <h3 className="text-2xl">{p.name}</h3>
        <p>
          Cantidad:
          {' '}
          {p.qty}
        </p>
        <p>
          $
          {p.price}
        </p>
        <div>
          <Button
            onClick={() => removeItem(p, p.qty)}

          >
            Remove product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
