import '@fontsource/inter/500.css';
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Container, Box, Button, VStack, StackDivider, Spacer, Icon, Image, Text, Flex, Center, IconButton, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { BsSticky } from 'react-icons/bs'
import DateCalendar from '../components/calendar/DateCalendar'
import Appy from '../components/todo/Appy';
import TodoApp from '../components/todo/TodoApp';
import Navigator from '../components/Navigator'
import Goals from './Activity/Goals';
import Journal from '../components/notes/Journal'
import { SmallAddIcon } from '@chakra-ui/icons';

const Home = () => {
  const [ name, setName ] = useState('');
  const [ isVisible, setIsVisible ] = useState(false);


  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    let user = await Auth.currentAuthenticatedUser();
    console.log("user:", user);
    console.log("user attributes: ", user.attributes);
    setName(user.username)
  }
  const handlePress = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <section>
      <Navigator />


      <Container className="home" p='4' minH='100vh' maxW='7xl' >
        <Container maxW={ 'md' }>
          {/* <StickyNote
            alignment="center"
            note={ `Things to note...` }
            preview={ false }
            shadow={ true }
            // Using default values:
            color="blue"
            onClick={ undefined }
            onMouseEnter={ undefined }
            onMouseLeave={ undefined }
            smallFont={ true }
            useScriptFont={ false }
          /> */}
          <Flex>
            <Center>
              <Text id="greeting" color={ useColorModeValue('gray.600', 'white') } fontSize='xl'>
                Welcome back, { name } !
              </Text>
            </Center>
            <Spacer />
            <Box h={ '3em' }>
              <Link to="/goals">

                <Image src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/icn.svg?alt=media&token=40c29607-6a7f-4001-bb02-9c9435839e41' } />
              </Link>
              <IconButton as={ Link } to="/goals" bg={ useColorModeValue('transparent', 'transparent') } variant='ghost' />

            </Box>
          </Flex>
        </Container>
        <Container>
          <VStack divider={ <StackDivider borderColor='gray.200' /> } spacing={ 4 } align='stretch' width='100%' mt='4' p='5'>
            <Box id="calendar-wrap" p='3' borderRadius='lg'>
              <Box p='3' borderRadius='lg' maxW='350px' boxShadow='2xl' color={ useColorModeValue('blue.500', 'white') } bg={ useColorModeValue('white', '#4D5E7C') }>

                <DateCalendar />

              </Box>
            </Box>
          </VStack>

          <Appy />
          <TodoApp />

          {/* <TodoApp /> */ }

        </Container>
        {/* <Goals /> */ }



      </Container>
    </section >
  )

  // function Item() {
  //   const [ isOpen, setIsOpen ] = useState(false);

  //   const toggleOpen = () => setIsOpen(!isOpen);

  //   return (
  //     <motion.li layout onClick={ toggleOpen } initial={ { borderRadius: 10 } }>
  //       <motion.div className="avatar" layout />
  //       <AnimatePresence>{ isOpen && <Content /> }</AnimatePresence>
  //     </motion.li>
  //   );
  // }

  // function Content() {
  //   return (
  //     <motion.div
  //       layout
  //       initial={ { opacity: 0 } }
  //       animate={ { opacity: 1 } }
  //       exit={ { opacity: 0 } }
  //     >
  //       <div className="row" />
  //       <div className="row" />
  //       <div className="row" />
  //     </motion.div>
  //   );
  // }

}
// const items = [ 0, 1, 2 ];

export default Home
