import {
  Box,
  Button, Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const categories = ['Deals', 'Clothing', 'Technology'];

// eslint-disable-next-line react/function-component-definition
const NavBar = () => (
  <Flex align="baseline">
    <Box flex="1 1 10%">
      <h1>Kwikapp 🛍️</h1>
    </Box>
    <Flex h={8} flexDirection="row" alignItems="end" justifyContent="flex-end">
      {

      categories.map((category) => (
        <Button
          px={6}
          bg={useColorModeValue('#151f21', 'gray.900')}
          color="white"
          rounded="md"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
        >
          {category}
        </Button>

      ))

    }
      <CartWidget />
    </Flex>

  </Flex>

);

export default NavBar;
