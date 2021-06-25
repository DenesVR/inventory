import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { Flex } from '@chakra-ui/react';
import { Redirect } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Opbergers from './Opbergers';
import AddOpberger from './AddOpberger';

//const token = Cookies.get('token');
const token = localStorage.getItem('token');
let userId = '';

//Authorization: `Bearer ${token}`,
const authAxios = axios.create({
  baseURL: `https://wdev2.be/denes21/eindwerk/api`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// if (token) {
//   userId = jwt_decode(token);
//   console.log('******');
//   console.log(userId.id);
//   console.log('******');
// }

// ${userId.id}
function Home() {
  const [user, SetUser] = useState([]);
  useEffect(() => {
    //GET REQUEST
    authAxios(`/users/1`)
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
      <Opbergers />
      <AddOpberger />
    </Flex>
  );
}

export default Home;
