import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import JournalPage from './pages/JournalPage';
import Landing from './pages/Landing';
import Missing from './pages/Missing';
import { Explore } from './pages';
import { LoveLanguage } from './components/cards/LoveLanguage';
import { Communication } from './components/cards/Communication';
import { Growth } from './components/cards/Growth';
import { Conflict } from './components/cards/Conflict';
import CreatePost from './components/post/CreatePost';
import Post from './components/post/Post';
import Notes from './components/notes/Notes';
import Journal from './components/post/Journal';
import Appy from './components/todo/Appy';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App({ user, signOut }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journalpage" element={<JournalPage />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post" element={<Post />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="communication" element={<Communication />} />
          <Route path="/lovelanguage" element={<LoveLanguage />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/conflict" element={<Conflict />} />
          <Route path="/appy" element={<Appy />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </ChakraProvider>
  );
}

export default withAuthenticator(App);
