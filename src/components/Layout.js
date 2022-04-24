import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from './Navigator';
// import Header from './Header'
// import AddPost from './AddPost'
import { BackButton } from './BackButton';
import { Container } from '@chakra-ui/react';

const Layout = () => {
  return (
    <main className="App">
      <Navigator />
      <Container mt={'3'}>
        <BackButton />
      </Container>
      <Outlet />
    </main>
  );
};

export default Layout;
