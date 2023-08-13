import {
  Box,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const [categories, setCategories] = React.useState([]);

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
      console.log('res', res);
      setCategories(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <Flex align="center" justify="space-between" p={4} bg="gray.800" color="white">
      <Box>
        <Link to="/">Kwikapp 🛍️</Link>
      </Box>
      <Flex as="ul" listStyleType="none" m={0} p={0}>
        {categories.map((cat) => (
          <li key={cat.id} style={{ margin: '0 8px' }}>
            <NavLink to={`/category/${cat.id}`} activeStyle={{ fontWeight: 'bold' }}>
              {cat.name}
            </NavLink>
          </li>
        ))}
      </Flex>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
