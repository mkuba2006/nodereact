import React from 'react';
import ReactDOM from 'react-dom/client';
import UserList from './App';
import { ChakraProvider } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
      <UserList />
  </ChakraProvider>
);

