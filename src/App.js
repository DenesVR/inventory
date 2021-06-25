import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Producten from './components/Producten';
import Menu from './components/Menu';
import WinkelLijst from './components/WinkelLijst';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/producten">
            <Producten />
          </Route>
          <Route path="/winkellijst">
            <WinkelLijst />
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
