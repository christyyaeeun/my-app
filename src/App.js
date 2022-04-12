import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './components/Layout';
import Timeline from './pages/Timeline';
import Profile from './pages/Profile';
import Journal from './pages/Journal';
import Missing from './pages/Missing';
import { Explore } from './pages';
import { LoveLanguage } from './components/cards/LoveLanguage';
import { Communication } from './components/cards/Communication';
import { Growth } from './components/cards/Growth';
import { Conflict } from './components/cards/Conflict';
import Notes from './components/notes/Notes';
import AddNote from './components/notes/AddNote';
import Note from './components/notes/Note';
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
          <Route path=":userId" element={<Profile />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/Notes' element={<Notes />} />
          <Route path='/addNote' element={<AddNote />} />
          <Route path='/note' element={<Note />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='communication' element={<Communication />} />
          <Route path='/qualitytime' element={<LoveLanguage />} />
          <Route path='/growth' element={<Growth />} />
          <Route path='/conflict' element={<Conflict />} />
          <Route path='/timeline' element={<Timeline />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default withAuthenticator(App)
