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
    <>
      <Flex align="baseline">
        <Box flex="1 1 10%">
          <li>
            <Link to="/">Kwikapp 🛍️</Link>
          </li>
        </Box>
        <Flex h={8} flexDirection="row" alignItems="end" justifyContent="flex-end" />
        <>
          {categories.map((cat) => (
            <NavLink key={cat.id} to={`/category/${cat.id}`}>
              {cat.name}
            </NavLink>
          ))}
        </>
        <CartWidget />
      </Flex>
    </>
  );
};

export default NavBar;
