import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { Redirect } from 'react-router-dom';

const token = localStorage.getItem('token');

function WinkelLijst() {
  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <Flex minH="100vh" bg={'gray.100'}>
      <Sidebar />
    </Flex>
  );
}

export default WinkelLijst;
