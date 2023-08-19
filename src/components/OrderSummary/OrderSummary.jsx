import {
  Box, Divider,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
    const orderId = useSelector((state) => state.orderReducer.orderID);

     console.log('state in OrderSummary', useSelector((state) => state.orderReducer));

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" shadow="md">
      <Heading size="md">Order Summary</Heading>
      <Divider my={2} />
      <Text>
        Order ID:
        {' '}
        <strong>{orderId}</strong>
      </Text>
      {/* <Text>
        Total Items:
        {' '}
        <strong>{items}</strong>
      </Text> */}
      <Text>
        Total Amount:
        {' '}
        {/* <strong>
          $
          {total}
        </strong> */}
      </Text>
    </Box>
  );
};

export default OrderSummary;
