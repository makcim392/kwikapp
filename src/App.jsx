import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import NavBar from './components/NavBar/NavBar';

const App = () => (
  <ChakraProvider>
    <Box bg="blue.500" color="white" p={4}>
      Kwikapp
    </Box>
    <NavBar />
  </ChakraProvider>

);

export default App;
