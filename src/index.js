import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import Search from './components/search_user/search_user';
import store from './store/store';
import UserList from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Glowa from './components/Head';


const root = createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Glowa />,
    children: [
      { path: '/form', element: <UserList/> },
      { path: '/Search', element: <Search/> }
    ],
  }
]);





root.render(
  <Provider store={store}>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>
);
