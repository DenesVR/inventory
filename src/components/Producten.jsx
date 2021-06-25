import React, { useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import ProductList from './ProductList';
import { Redirect } from 'react-router-dom';
import AddProduct from './AddProduct';

const token = localStorage.getItem('token');

const authAxios = axios.create({
  baseURL: `https://wdev2.be/denes21/eindwerk/api`,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

function Producten() {
  // if (!token) {
  //   return <Redirect to="/login" />;
  // }

  const [product, setProduct] = useState([]);

  useEffect(() => {
    authAxios(`/productens`).then(res => {
      console.log(res.data['hydra:member']);
      setProduct(res.data['hydra:member']);
    });
  }, [product]);
  return (
    <Flex minH="100vh" bg={'gray.100'}>
      <Sidebar />
      <Box>
        <ProductList product={product} />
      </Box>
      <Box>
        <AddProduct />
      </Box>
    </Flex>
  );
}

export default Producten;
