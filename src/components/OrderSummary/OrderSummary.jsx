import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
    const orderId = useSelector((state) => state.orderReducer.orderID);
    const order = useSelector((state) => state.orderReducer.order);

     console.log('state in OrderSummary', useSelector((state) => state.orderReducer));

     const calculateTotal = () => {
      if (!order || !order.items || !Array.isArray(order.items)) {
        // Handle the case where order or order.items is undefined or not an array
        return 0; // or return an appropriate default value
      }

      const grandTotal = order.items.reduce((total, item) => {
        const itemPrice = Number(item.price);
        const itemQty = Number(item.qty);

        if (Number.isNaN(itemPrice) || Number.isNaN(itemQty)) {
          console.log(`Invalid price or quantity for item: ${item.title}`);
          return total; // Skip this item in the total calculation
        }

        const subtotal = itemPrice * itemQty;

        // Debugging logs
        console.log(`Item: ${item.title}, Price: ${itemPrice}, Qty: ${itemQty}, Subtotal: ${subtotal}`);

        return total + subtotal;
      }, 0);

      console.log('grandTotal inside function', grandTotal);

      return grandTotal;
    };

    const {
      buyer,
      date,
      items,
    } = order;

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
            {items?.map((item) => (
              <ListItem key={item.id}>
                {item?.title}
                {' '}
                - $
                {item?.price}
              </ListItem>
            ))}
          </List>
          <Text>
            Total Amount:
            {' '}
            <strong>
              $
              {calculateTotal()}
            </strong>
          </Text>
        </Box>
      );
};

export default OrderSummary;
