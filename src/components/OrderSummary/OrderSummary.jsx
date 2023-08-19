import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
    const orderId = useSelector((state) => state.orderReducer.orderID);

     console.log('state in OrderSummary', useSelector((state) => state.orderReducer));

  return (
    <>
      <div>OrderSummary</div>
      <p>
        Order id:
        {orderId}
        {' '}
        created
      </p>

    </>
  );
};

export default OrderSummary;
