import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './components/Layout';
import Journal from './pages/Journal';
import Missing from './pages/Missing';
import {
  ChakraProvider,
  Box,
  Link,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { withAuthenticator } from '@aws-amplify/ui-react'


function App({ user, signOut }) {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/journal' element={<Journal />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default withAuthenticator(App)