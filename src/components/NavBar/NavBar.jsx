import {
  Box,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <>
      <Flex align="baseline">
        <Box flex="1 1 10%">
          <li>
            <Link to="/">Kwikapp 🛍️</Link>
          </li>
        </Box>
        <Flex h={8} flexDirection="row" alignItems="end" justifyContent="flex-end" />
        <CartWidget />
      </Flex>
    </>
  );
};

export default NavBar;
