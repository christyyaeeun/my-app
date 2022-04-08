import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Auth } from 'aws-amplify';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Journal from './pages/Journal';
import Missing from './pages/Missing';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import { withAuthenticator } from '@aws-amplify/ui-react'



function App({ user, signOut }) {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='/journal' element={<Journal />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default withAuthenticator(App)