import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesData = [
      { id: 'category1', name: 'Categoría 1' },
      { id: 'category2', name: 'Categoría 2' },
      { id: 'category3', name: 'Categoría 3' },
    ];

    const getCategories = new Promise((resolve, reject) => {
      if (categoriesData.length > 0) {
        setTimeout(() => {
          resolve(categoriesData);
        }, 2000);
      } else {
        reject(new Error('No data'));
      }
    });

    getCategories
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Flex align="center" justify="space-between" p={4} bg="gray.800" color="white">
      <Box>
        <Link to="/home">Kwikapp 🛍️</Link>
      </Box>
      <Menu>
        <MenuButton as={Button} variant="link">
          Categories
        </MenuButton>
        <MenuList>
          {categories.map((cat) => (
            <MenuItem key={cat.id}>
              <Link to={`/category/${cat.id}`}>{cat.name}</Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Box>
        <Link to="/">All products</Link>
      </Box>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
