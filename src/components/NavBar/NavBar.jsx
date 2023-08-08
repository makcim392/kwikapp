import {
  Box,
  Flex,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../mocks/async-mocks';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <>
      <Flex align="baseline">
        <Box flex="1 1 10%">
          <li>
            <Link to="/">Kwikapp 🛍️</Link>
          </li>
        </Box>
        <Flex h={8} flexDirection="row" alignItems="end" justifyContent="flex-end">
          {categories.map((category) => (
            <>
              <Link to={`/category/${category.id}`}>
                {category.name}
                {/* <Button
                  key={category.id}
                  px={6}
                  bg={useColorModeValue('#151f21', 'gray.900')}
                  color="white"
                  rounded="md"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  {category.name}
                </Button> */}
              </Link>
            </>
          ))}
        </Flex>
        <CartWidget />
      </Flex>
    </>
  );
};

export default NavBar;
