import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const CartItemList = () => {
  const cartContext = useContext(CartContext);

  const { itemsCart, clearCart, totalPrice } = cartContext;

  return (
    <section>
      {itemsCart.length ? (
        <div>
          {itemsCart.map((p) => (
            <CartItem key={p.id} prod={p} />
          ))}
          <div className="text-right mr-64">
            <h3>
              Grand total: $
              {totalPrice}
            </h3>
            <Button onClick={clearCart} colorScheme="red" mt={8} mr={4}>
              Empty cart
            </Button>
            <Link to="/form">
              <Button colorScheme="green" mt={8}>
                Finish purchase
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h3>Cart has no products</h3>
          <Link to="/">
            <Button colorScheme="blue" mt={8}>
              Back to home
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default CartItemList;
