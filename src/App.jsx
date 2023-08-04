import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const App = () => (
  <BrowserRouter>
    <ChakraProvider>
      <Box bg="blue.500" color="white" p={4}>
        <NavBar />
        <ItemListContainer />
      </Box>
    </ChakraProvider>
  </BrowserRouter>

);

export default App;
