import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const categories = ['Deals', 'Clothing', 'Technology'];

// eslint-disable-next-line react/function-component-definition
const NavBar = () => (
  <div>
    <Flex h={1} flexDirection="row" justifyContent="flex-start">
      <h1>Kwikapp 🛍️</h1>
    </Flex>
    <Flex h={8} flexDirection="row" justifyContent="flex-end">
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

  </div>

);

export default NavBar;
