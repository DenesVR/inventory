import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';

function Register() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
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
          <Input type={show ? 'text' : 'password'} placeholder="Password" />
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
  );
}

export default Register;
