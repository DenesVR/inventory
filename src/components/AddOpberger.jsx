import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const token = localStorage.getItem('token');

//Authorization: `Bearer ${token}`,
// const authAxios = axios.create({
//   baseURL: `https://wdev2.be/denes21/eindwerk/api`,
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

function AddOpberger() {
  const [opberger, setOpberger] = useState({
    userId: '/api/users/1',
    naam: '',
  });
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          axios
            .post(`https://wdev2.be/denes21/eindwerk/api/opbergers`, opberger, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then(res => {
              console.log(res.data);
            })
            .catch(error => alert('Niet toegevoegd'));

          setOpberger({ userId: '/api/users/1', naam: '' });
        }}
      >
        <FormControl id="opberger naam">
          <FormLabel>Opberger naam</FormLabel>
          <Input
            value={opberger.naam}
            type="text"
            placeholder="opberger naam"
            onChange={e => {
              setOpberger({
                ...opberger,
                naam: e.target.value,
              });
            }}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Toevoegen
        </Button>
      </form>
    </div>
  );
}

export default AddOpberger;
