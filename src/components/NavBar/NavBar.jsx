import { Button } from '@chakra-ui/react';
import React from 'react';

const categories = ['Deals', 'Clothing', 'Technology'];

// eslint-disable-next-line react/function-component-definition
const NavBar = () => (
  <div>
    <h1>
      Welcome to Kwikapp
    </h1>

    {
      categories.map((category) => (
        <Button
          px={16}
        // bg={useColorModeValue('#151f21', 'gray.900')}
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

  </div>
);

export default NavBar;
