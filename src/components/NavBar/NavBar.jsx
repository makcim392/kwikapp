import {
  Box,
  Button, Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const categories = ['Deals', 'Clothing', 'Technology'];

const NavBar = () => (
  <Flex align="baseline">
    <Box flex="1 1 10%">
      <li><Link to="/">Kwikapp 🛍️</Link></li>
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
