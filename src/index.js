import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import store from './store/store';
import UserList from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <UserList />
    </ChakraProvider>
  </Provider>
);
