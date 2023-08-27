import {
    Box,
    Flex,
    Image, Text,
} from '@chakra-ui/react';
import React from 'react';

const OrderSummaryItem = ({ item }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" py={2}>
      <Image src={item?.pictureUrl} alt={item?.name} maxW="100px" />
      <Box flex="1" ml={4}>
        <Text fontSize="lg" fontWeight="bold">
          {item?.name}
        </Text>
        <Text fontSize="sm">{item?.description}</Text>
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          $
          {item?.price}
        </Text>
        <Text fontSize="sm">
          Quantity:
          {' '}
          {item?.qty}
        </Text>
      </Box>
    </Flex>
  );
};

export default OrderSummaryItem;
