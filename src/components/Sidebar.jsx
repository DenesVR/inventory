import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Menu, MenuItem, VStack, Avatar } from '@chakra-ui/react';

function Sidebar() {
  return (
    <Box w={'15vw'} pt={'10vh'} bg={'grey'} align={'center'}>
      <Menu>
        <VStack minH={'70vh'} spacing={2}>
          <MenuItem>
            <Link to="/">Voorraad</Link>
          </MenuItem>
          <MenuItem>Producten</MenuItem>
          <MenuItem>Weekmenu</MenuItem>
          <MenuItem>Test</MenuItem>
        </VStack>
      </Menu>
      <Avatar size="lg" bg="blue.800" name="Denes Van Roy" src="" />
    </Box>
  );
}

export default Sidebar;
