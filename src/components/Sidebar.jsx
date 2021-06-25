import React from 'react';
import { Link } from 'react-router-dom';
import * as Cookies from 'js-cookie';
import { Box, Menu, MenuItem, VStack, Avatar } from '@chakra-ui/react';

function Sidebar({ user }) {
  return (
    <Box w={'15vw'} pt={'10vh'} bg={'grey'} align={'center'}>
      <Menu>
        <VStack minH={'70vh'} spacing={2}>
          <MenuItem>
            <Link to="/">Voorraad</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/producten">Producten</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/menu">Menu</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/winkellijst">Winkellijst</Link>
          </MenuItem>
        </VStack>
      </Menu>
      <Box>
        <Avatar size="lg" bg="blue.800" name="Denes Van Roy" src="" />
      </Box>
      <button onClick={Cookies.remove('token')}>Logout</button>
    </Box>
  );
}

export default Sidebar;
