import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Goals from './pages/Goals';
import Landing from './pages/Landing';
import Missing from './pages/Missing';
import Home from './pages/Home';
import Paired from './pages/Paired';
import Layout from './components/Layout';
import { Explore } from './pages';
import { LoveLanguage } from './components/cards/LoveLanguage';
import { Communication } from './components/cards/Communication';
import { Growth } from './components/cards/Growth';
import { Conflict } from './components/cards/Conflict';
import CreatePost from './components/post/CreatePost';
import Post from './components/post/Post';
import PostList from './components/post/PostList';
// import Notes from './components/notes/Notes';
import UserPage from './pages/UserPage';

import Journal from './components/journal/Journal';
import Entry from './components/journal/Entry';
import Note from './components/notes/Note';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// function Login() {}

function App({ user, signOut }) {
  return (
    <ChakraProvider theme={ theme }>
      <CSSReset />
      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/" element={ <Layout /> }>
          <Route path="/paired" element={ <Paired /> } />
          <Route path="/userpage" element={ <UserPage /> } />
          <Route path="/goals" element={ <Goals /> } />
          <Route path="/journal" element={ <Journal /> } />
          <Route path="/entry" element={ <Entry /> } />
          <Route path="/post" element={ <Post /> } />
          <Route path="/createpost" element={ <CreatePost /> } />
          <Route path="/note" element={ <Note /> } />
          <Route path="/explore" element={ <Explore /> } />
          <Route path="/communication" element={ <Communication /> } />
          <Route path="/lovelanguage" element={ <LoveLanguage /> } />
          <Route path="/growth" element={ <Growth /> } />
          <Route path="/conflict" element={ <Conflict /> } />
        </Route>
        <Route path="/landing" element={ <Landing /> } />
        <Route path="*" element={ <Missing /> } />
      </Routes>
    </ChakraProvider>
  );
}

export default withAuthenticator(App);
