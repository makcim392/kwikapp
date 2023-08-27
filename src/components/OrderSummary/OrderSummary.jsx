import {
  Box,
  Divider,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderIdAction } from '../../Redux/Order/OrderActions';

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

    //  const calculateTotal = () => {
    //   if (!order || !order.items || !Array.isArray(order.items)) {
    //     // Handle the case where order or order.items is undefined or not an array
    //     return 0; // or return an appropriate default value
    //   }

    //   const grandTotal = order.items.reduce((total, item) => {
    //     const itemPrice = Number(item.price);
    //     const itemQty = Number(item.qty);

    //     if (Number.isNaN(itemPrice) || Number.isNaN(itemQty)) {
    //       console.log(`Invalid price or quantity for item: ${item.title}`);
    //       return total; // Skip this item in the total calculation
    //     }

    //     const subtotal = itemPrice * itemQty;

    //     // Debugging logs
    //     console.log(`Item: ${item.title}, Price: ${itemPrice}, Qty: ${itemQty}, Subtotal: ${subtotal}`);

    //     return total + subtotal;
    //   }, 0);

    //   console.log('grandTotal inside function', grandTotal);

    //   return grandTotal;
    // };

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
              <ListItem key={item?.id}>
                <Image src={item?.pictureUrl} alt="Placeholder" maxW="100px" />
                {item?.name}
                {' '}
                Description
                {' '}
                {item?.description}
                {' '}
                - Price $
                {item?.price}
                {' '}
                Quantity
                {' '}
                {item?.qty}
              </ListItem>
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
