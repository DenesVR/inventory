import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  Flex,
  Box,
  Heading,
  Stack,
  Grid,
  VStack,
} from '@chakra-ui/react';

function Register() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [userValue, setUserValue] = useState({
    voornaam: '',
    achternaam: '',
    email: '',
    password: '',
  });
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg={'gray.100'}>
        <VStack spacing={8}>
          <Flex minH={'90vh'} align={'center'} justify={'center'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack align={'center'}>
                <Heading>Register</Heading>
              </Stack>
              <Box rounded={'lg'} bg={'white'} p={8}>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    //alert("Met succes geregistreerd!");
                    axios
                      .post(
                        `https://wdev2.be/denes21/eindwerk/api/users`,
                        userValue
                      )
                      .then(res => console.log(res))
                      .catch(error => alert('Error!'));
                    setUserValue({
                      voornaam: '',
                      achternaam: '',
                      email: '',
                      password: '',
                    });
                  }}
                >
                  <FormControl id="voornaam" isRequired>
                    <FormLabel>Voornaam</FormLabel>
                    <Input
                      value={userValue.voornaam}
                      placeholder="Voornaam"
                      onChange={e => {
                        setUserValue({
                          ...userValue,
                          voornaam: e.target.value,
                        });
                      }}
                    />
                  </FormControl>
                  <FormControl id="achternaam" isRequired>
                    <FormLabel>Achternaam</FormLabel>
                    <Input
                      value={userValue.achternaam}
                      placeholder="Achternaam"
                      onChange={e => {
                        setUserValue({
                          ...userValue,
                          achternaam: e.target.value,
                        });
                      }}
                    />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      value={userValue.email}
                      placeholder="Email"
                      onChange={e => {
                        setUserValue({ ...userValue, email: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormControl id="Password" isRequired>
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
                    Register
                  </Button>
                </form>
              </Box>
            </Stack>
          </Flex>
        </VStack>
      </Grid>
    </Box>
  );
}

export default Register;
