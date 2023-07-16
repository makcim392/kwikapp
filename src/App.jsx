import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <ChakraProvider>
      <Box bg="blue.500" color="white" p={4}>
        Kwikappa
      </Box>
      <NavBar />
    </ChakraProvider>

  );
}

export default App;
