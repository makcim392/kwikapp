/* eslint-disable react/react-in-jsx-scope */
import { Box } from '@chakra-ui/react';
import React from 'react';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <Box bg="blue.500" color="red" p={4}>
        This is a Chakra UI Box component.
      </Box>
      <NavBar />
    </div>

  );
}

export default App;
