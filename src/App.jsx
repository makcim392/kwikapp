import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description 1',
    price: 100,
    pictureUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description 2',
    price: 200,
    pictureUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description 3',
    price: 300,
    pictureUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description 4',
    price: 400,
    pictureUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description 5',
    price: 500,
    pictureUrl: 'https://via.placeholder.com/150',
  },
];

const App = () => (
  <>
    <BrowserRouter>
      <ChakraProvider>
        <Box bg="blue.500" color="white" p={4}>
          <NavBar />
        </Box>
        <Routes>
          <Route exact path="/" element={<ItemListContainer products={products} />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
    <ToastContainer />
  </>
);

export default App;
