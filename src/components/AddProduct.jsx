import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const token = localStorage.getItem('token');

function AddProduct() {
  const [product, setProduct] = useState({
    ladeId: '/api/lades/1',
    naam: '',
    beschrijving: '',
    porties: 0,
    foto: null,
  });
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          axios
            .post(
              `https://wdev2.be/denes21/eindwerk/api/productens`,
              product,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
              // opberger
            )
            .then(res => {
              console.log(res.data);
            })
            .catch(error => alert('Niet toegevoegd'));

          setProduct({
            ladeId: '/api/lades/1',
            naam: '',
            beschrijving: '',
            porties: 0,
            foto: null,
          });
        }}
      >
        <FormControl id="product">
          <FormLabel>Product naam</FormLabel>
          <Input
            value={product.naam}
            type="text"
            placeholder="product naam"
            onChange={e => {
              setProduct({
                ...product,
                naam: e.target.value,
              });
            }}
          />
        </FormControl>
        <FormControl id="product beschrijving">
          <FormLabel>Product beschrijving</FormLabel>
          <Input
            value={product.beschrijving}
            type="text"
            placeholder="product naam"
            onChange={e => {
              setProduct({
                ...product,
                beschrijving: e.target.value,
              });
            }}
          />
        </FormControl>
        <FormControl id="product">
          <FormLabel>Product porties</FormLabel>
          <Input
            value={product.porties}
            type="number"
            placeholder="product porties"
            onChange={e => {
              setProduct({
                ...product,
                porties: parseInt(e.target.value),
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

export default AddProduct;
