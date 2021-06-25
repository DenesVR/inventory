import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect, Switch, Route, useHistory } from 'react-router-dom';
import * as Cookies from 'js-cookie';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  Flex,
  Box,
  Stack,
  Heading,
  Divider,
  Grid,
  VStack,
} from '@chakra-ui/react';
import Home from '../components/Home';

//const token = Cookies.get('token');

function Login() {
  const history = useHistory();
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [userValue, setUserValue] = useState({
    username: '',
    password: '',
  });

  console.log(submitted);

  if (submitted) {
    return <Redirect push to={{ pathname: '/producten' }} />;
  }

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg={'gray.100'}>
        <VStack spacing={8}>
          <Flex minH={'90vh'} align={'center'} justify={'center'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack align={'center'}>
                <Heading>Login</Heading>
              </Stack>
              <Box rounded={'lg'} bg={'white'} p={8}>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    //alert("Met succes geregistreerd!");
                    axios
                      .post(
                        `https://wdev2.be/denes21/eindwerk/api/login_check`,
                        userValue
                      )
                      .then(res => {
                        // Cookies.set('token', res.data.token, {
                        //   expires: 1,
                        //   path: '',
                        //   secure: true,
                        //   sameSite: 'Lax',
                        // });

                        //console.log(res.headers('set-cookie'));
                        console.log(res.data);

                        //Cookies.set('token', res.data.token);
                        localStorage.setItem('token', res.data.token);
                        setSubmitted(true);
                        //history.push('/');
                      })
                      .catch(error => alert('Deze gebruiker bestaat niet!'));

                    setUserValue({ username: '', password: '' });
                  }}
                >
                  <FormControl id="email-login">
                    <FormLabel>Email</FormLabel>
                    <Input
                      value={userValue.username}
                      type="email"
                      placeholder="Email"
                      onChange={e => {
                        setUserValue({
                          ...userValue,
                          username: e.target.value,
                        });
                      }}
                    />
                  </FormControl>
                  <FormControl id="ww-login">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        value={userValue.password}
                        type={show ? 'text' : 'password'}
                        placeholder="Password"
                        onChange={e => {
                          setUserValue({
                            ...userValue,
                            password: e.target.value,
                          });
                        }}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Button mt={4} colorScheme="teal" type="submit">
                    Login
                  </Button>
                </form>
              </Box>
              <Divider />
              <Box>
                <Link to="/register">
                  <Button pr={9} pl={9} colorScheme={'teal'}>
                    Create your inventory account
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Flex>
        </VStack>
      </Grid>
    </Box>
  );
}

export default Login;
