import React from 'react';
import { Link } from 'react-router-dom';
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

function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
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
                <form>
                  <FormControl id="email-login">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Email" />
                  </FormControl>
                  <FormControl id="ww-login">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={show ? 'text' : 'password'}
                        placeholder="Password"
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
