import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Login />
            <Register />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
