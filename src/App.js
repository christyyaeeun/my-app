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
// import Appy from './components/calendar/Appy';
// import Post from './components/entry/Post';
// import Posts from './components/entry/Posts';
// import CreatePost from './components/entry/CreatePost';
import Posts from './components/entry/Posts';
import
  {
    ChakraProvider,
    theme
  } from '@chakra-ui/react';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure( awsconfig );


function App ( { user, signOut } )
{
  return (
    <ChakraProvider theme={ theme }>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route path='/home' element={ <Home /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path='/journal' element={ <Journal /> } />
          <Route path='/notes' element={ <Notes /> } />
          <Route path='/explore' element={ <Explore /> } />
          <Route path='communication' element={ <Communication /> } />
          <Route path='/lovelanguage' element={ <LoveLanguage /> } />
          <Route path='/growth' element={ <Growth /> } />
          <Route path='/conflict' element={ <Conflict /> } />
          <Route path='/timeline' element={ <Timeline /> } />
          <Route path='/posts' element={ <Posts /> } />
          {/* <Route path='/post' element={ <Post /> } />
          <Route path='/posts' element={ <Posts /> } />
          <Route path='/createpost' element={ <CreatePost /> } /> */}
          {/* <Route path='/appy' element={ <Appy /> } /> */}
          <Route path="*" element={ <Missing /> } />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default withAuthenticator( App )
