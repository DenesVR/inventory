import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { Flex } from '@chakra-ui/react';
import { Redirect } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const token = Cookies.get('token');
let userId = '';

const authAxios = axios.create({
  baseURL: `http://localhost:8000/api`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

if (token) {
  userId = jwt_decode(token);
  //console.log(userId.id);
}

function Home() {
  const [user, SetUser] = useState([]);
  useEffect(() => {
    //GET REQUEST
    authAxios(`/users/${userId.id}`)
      .then(Response => {
        SetUser(Response.data);
        console.log(Response.data);
      })
      .catch(error => {});
  }, []);

  //Als User niet bestaat naar login pagina
  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Flex minH="100vh" bg={'gray.100'}>
      <Sidebar />
    </Flex>
  );
}

export default Home;
