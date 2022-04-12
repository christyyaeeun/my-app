import '@fontsource/inter/500.css';
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Container, Box, VStack, StackDivider, Spacer, Text, Flex, Center, IconButton, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import DateCalendar from '../components/DateCalendar'
import { BsSticky } from 'react-icons/bs'
import '../styles/style.css'

const Home = () => {
  const [name, setName] = useState('');


  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function checkUser() {
    let user = await Auth.currentAuthenticatedUser();
    console.log("user:", user);
    console.log("user attributes: ", user.attributes);
    setName(user.username)
  }


  return (
    <section>
      {/* <Container className="home" p='4' minH='100vh' maxW='7xl' opacity='.8' bgGradient="linear(to-t, blue.100, gray.200)" > */}
      <Container className="home" p='4' minH='100vh' maxW='7xl' >
      <Container maxW={'md'}>
        <Flex>
        <Center>
          <Text useColorModeValue={('gray.300', 'white')} fontSize='xl' mt='6' >
            Welcome back, {name}
          </Text>
        </Center>
        <Spacer />
        <Box mt='1em'>
          <IconButton as={Link} to="/notes" bg='white' variant='ghost' icon={<BsSticky />} />
        </Box>
    
        </Flex>


        </Container>
        <Container>
          <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch' width='100%' mt='4' p='5'>
            <Box id="calendar-wrap" p='3' borderRadius='lg' bg=''>
              <Box p='3' borderRadius='lg' maxW='350px' boxShadow='md' bg='white'>
                <DateCalendar />
              </Box>
            </Box>
          </VStack>
          <Flex
            flexWrap='wrap'
            spacing='24px'
            gap='16px'
            justifyContent='space-evenly'
          >
          </Flex>
        </Container>
  
      </Container>
    </section>
  )
}


export default Home
