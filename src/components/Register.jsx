import React from 'react';
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
                <form>
                  <FormControl id="voornaam" isRequired>
                    <FormLabel>Voornaam</FormLabel>
                    <Input placeholder="Voornaam" />
                  </FormControl>
                  <FormControl id="achternaam" isRequired>
                    <FormLabel>Achternaam</FormLabel>
                    <Input placeholder="Achternaam" />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Email" />
                  </FormControl>
                  <FormControl id="Password" isRequired>
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
