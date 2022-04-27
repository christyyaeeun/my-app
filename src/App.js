import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Goals from './pages/Goals';
import Landing from './pages/Landing';
import Missing from './pages/Missing';
import Home from './pages/Home';
import Paired from './pages/Paired';
import Grid from './components/journal/Grid';
import Test from './pages/Test';
import EntryPage from './pages/Landing/EntryPage';
import Layout from './components/Layout';
import { Explore } from './pages';
import { LoveLanguage } from './components/cards/LoveLanguage';
import { Communication } from './components/cards/Communication';
import { Growth } from './components/cards/Growth';
import { Conflict } from './components/cards/Conflict';
import CreatePost from './components/post/CreatePost';
import PostList from './components/post/PostList';
import Notes from './components/notes/Notes';
import Journal from './components/notes/Journal';
import Entry from './components/journal/Entry';
import PostApp from './components/post/PostApp';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// function Login() {}

function App({ user, signOut }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/entrypage" element={<EntryPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/postapp" element={<PostApp />} />
          <Route path="/paired" element={<Paired />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/journal" element={<Journal />} />
          {/* <Route path="/journalpage" element={<JournalPage />} /> */}
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="postlist" element={<PostList />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="communication" element={<Communication />} />
          <Route path="/lovelanguage" element={<LoveLanguage />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/conflict" element={<Conflict />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Missing />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </ChakraProvider>
  );
}

export default withAuthenticator(App);
