import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const App = () => (
  <ChakraProvider>
    <Box bg="blue.500" color="white" p={4}>
      <NavBar />
      <ItemListContainer />
    </Box>
  </ChakraProvider>

);

export default App;
