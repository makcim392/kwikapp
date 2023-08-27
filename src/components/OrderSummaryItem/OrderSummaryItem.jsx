import { Image, ListItem } from '@chakra-ui/react';
import React from 'react';

const OrderSummaryItem = ({ item }) => {
  return (
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
  );
};

export default OrderSummaryItem;
