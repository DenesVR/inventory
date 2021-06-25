import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

function OpbergerList({ opberg }) {
  return (
    <>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>naam</Th>
          </Tr>
        </Thead>
        <Tbody>
          {opberg.map(op => (
            <Tr key={op.id}>
              <Td>{op.id}</Td>
              <Td>{op.naam}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default OpbergerList;
