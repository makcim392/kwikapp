import {
  Box,
  Divider,
  Heading,
  List,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderIdAction } from '../../Redux/Order/OrderActions';
import OrderSummaryItem from '../OrderSummaryItem/OrderSummaryItem';

const OrderSummary = () => {
    const orderId = useSelector((state) => state.orderReducer.orderID);
    const order = useSelector((state) => state.orderReducer.order);
    const dispatch = useDispatch();

     console.log('state in OrderSummary', useSelector((state) => state.orderReducer));

     useEffect(() => {
      if (!orderId) {
        return () => {};
      }
      return () => {
        dispatch(setOrderIdAction(''));
      };
    }, [orderId, dispatch]);

    const {
      buyer,
      date,
      itemsCart,
      total,
    } = order;

    console.log('itemsCart in order summary', itemsCart);

      return (
        <Box p={4} borderWidth="1px" borderRadius="md" shadow="md">
          <Heading size="md">Order Summary</Heading>
          <Divider my={2} />
          <Text>
            Order ID:
            {' '}
            <strong>{orderId}</strong>
          </Text>
          <Text>
            Date:
            {' '}
            <strong>{date}</strong>
          </Text>
          <Text>
            Buyer Information:
          </Text>
          <VStack align="start" spacing={1} pl={4}>
            <Text>
              Name:
              {' '}
              {buyer?.name}
            </Text>
            <Text>
              Phone:
              {' '}
              {buyer?.phone}
            </Text>
            <Text>
              Email:
              {' '}
              {buyer?.email}
            </Text>
          </VStack>
          <Text>Ordered Items:</Text>
          <List pl={4}>
            {itemsCart?.map((item) => (
              <OrderSummaryItem key={item?.id} item={item} />
            ))}
          </List>
          <Text>
            Grand total:
            {' '}
            <strong>
              $
              {total}
            </strong>
          </Text>
        </Box>
      );
};

export default OrderSummary;
