import '@fontsource/inter/500.css';
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Container, Box, VStack, StackDivider, Spacer, Text, Flex, Center, IconButton, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { BsSticky } from 'react-icons/bs'
import DateCalendar from '../components/calendar/DateCalendar'
import Appy from '../components/todo/Appy';


const Home = () => {
  const [ name, setName ] = useState('');


  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    let user = await Auth.currentAuthenticatedUser();
    console.log("user:", user);
    console.log("user attributes: ", user.attributes);
    setName(user.username)
  }


  return (
    <section>
      <Container className="home" p='4' minH='100vh' maxW='7xl' >
        <Container maxW={ 'md' }>
          <Flex>
            <Center>
              <Text id="greeting" color={ useColorModeValue('gray.600', 'white') } fontSize='xl'>
                Welcome back, { name }
              </Text>
            </Center>
            <Spacer />
            <Box mt='1em'>
              <IconButton as={ Link } to="/notes" bg='white' variant='ghost' icon={ <BsSticky /> } />
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
          <Container>
            <Appy />
          </Container>
        </Container>
      </Container>
    </section>
  )
}


export default Home
