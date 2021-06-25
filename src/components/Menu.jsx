import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { Redirect } from 'react-router-dom';

const token = localStorage.getItem('token');

function Menu() {
  const [value, onChange] = useState(new Date());

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Flex minH="100vh" bg={'gray.100'}>
      <Sidebar />
      <Box>
        <DatePicker onChange={onChange} value={value} />
      </Box>
    </Flex>
  );
}

export default Menu;
