import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import store from './store/store'
import UserList from './App';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <UserList />
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);