import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider } from './context/CartContext';

const App = () => (
  <>
    <CartContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <Box bg="blue.500" color="white" p={4}>
            <NavBar />
          </Box>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
      <ToastContainer />
    </CartContextProvider>
  </>

);

export default App;
