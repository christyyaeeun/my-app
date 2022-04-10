import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Auth } from 'aws-amplify';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './components/Layout';
import Timeline from './pages/Timeline';
import Profile from './pages/Profile';
import Journal from './pages/Journal';
import Missing from './pages/Missing';
import { QualityTime } from './components/cards/QualityTime';
import { Communication } from './components/cards/Communication';
// import TodoApp from './components/TodoApp';
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
          {/* <Route exact path="/profile" element={<Profile />} /> */}
          <Route path=":userId" element={<Profile />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='communication' element={<Communication />} />
          <Route path='/qualitytime' element={<QualityTime />} />
          <Route path='/timeline' element={<Timeline />} />

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default withAuthenticator(App)
/*
export function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Routes>
    </div>
  )
} */