import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider>
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} bg={'gray.100'}>
          <VStack spacing={8}> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* </VStack>
        </Grid>
      </Box> */}
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
