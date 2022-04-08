import '@fontsource/inter/500.css';
import React from 'react';
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Container, Box, VStack, StackDivider, Text, Flex } from '@chakra-ui/react'
// import Calendar from 'react-calendar';
import DateCalendar from '../components/DateCalendar'

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


  // const basicBoxStyles = {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   textAlign: 'center',
  //   boxSize: '250px',
  //   color: 'white',
  //   textShadow: '0 0 20px black',
  //   fontWeight: 'bold',
  //   fontSize: '20px',
  //   px: 4,
  //   background:
  //   'url(https://firebasestorage.googleapis.com/v0/b/auth0-altitude.appspot.com/o/flower1.jpg?alt=media&token=be90ca65-613a-4a4f-86dc-21447a70d76a) center/cover no-repeat',
  // }

  // const outerBoxStyles = {
  //   boxSize: '250px',
  //   p: '10',
  //   background:
  //     'url(https://firebasestorage.googleapis.com/v0/b/auth0-altitude.appspot.com/o/flower1.jpg?alt=media&token=be90ca65-613a-4a4f-86dc-21447a70d76a) center/cover no-repeat',
  // }

  // const innerBoxStyles = {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   textAlign: 'center',
  //   boxSize: 'full',
  //   color: 'white',
  //   textShadow: '0 0 20px black',
  //   fontWeight: 'bold',
  //   fontSize: '20px',
  // }

  return (
    <section>
      {/* <Box w="100%" h="200px" opacity='.7' bgGradient="linear(to-t, blue.50, gray.300)" /> */}
      <Container className="home" p='4' maxW='900px' minH='100vh' opacity='.8' bgGradient="linear(to-t, blue.100, gray.200)" >
        <Text fontSize='xl' mt='6' color='gray.600'>
          Welcome back, {name}
        </Text>

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

          {/* adding blur property to the element */}
          {/* <Container py='8' pb='20' bg='white' m='5' maxW='310px' borderRadius='md' shadow='lg' centerContent>

        <Box sx={basicBoxStyles} filter='auto' blur='1.5px'>
          Box with Blur
        </Box>
        </Container>

<Container py='8' pb='20' bg='white' m='3' maxW='310px' borderRadius='md' shadow='lg' centerContent>
        <Box sx={outerBoxStyles}>
          <Box sx={innerBoxStyles} backdropFilter='auto' backdropContrast='60%'>
            Box with Backdrop Contrast
          </Box>
        </Box>
        </Container> */}
        </Flex>
    
      </Container>

    </section>
  )
}


export default Home

// #fff5cf
