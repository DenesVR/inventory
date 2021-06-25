import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OpbergerList from './OpbergerList';

const token = localStorage.getItem('token');

const authAxios = axios.create({
  baseURL: `https://wdev2.be/denes21/eindwerk/api`,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

function Opbergers() {
  const [opberg, setOpberg] = useState([]);

  useEffect(() => {
    authAxios(`/opbergers`).then(res => {
      console.log(res.data['hydra:member']);
      setOpberg(res.data['hydra:member']);
    });
  }, [opberg]);
  return (
    <>
      <OpbergerList opberg={opberg} />
    </>
  );
}

export default Opbergers;
