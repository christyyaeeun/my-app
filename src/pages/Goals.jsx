import React from 'react'
import {
  Heading,
  Box,
  Center,
  Flex,
  Text,
  Image,
  Stack,
  Grid,
  GridItem,
  Container,
  useColorModeValue,
  IconButton,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';
import { AmplifyS3Image } from '@aws-amplify/ui-react'
import { RiHeart2Line } from 'react-icons/ri'
import { BiGift } from 'react-icons/bi'
import { MdAccessAlarms, MdOutlineRoomService } from 'react-icons/md'
import { IoChatbubblesOutline } from 'react-icons/io'
import { BsPeople } from 'react-icons/bs'
import { FiMessageCircle } from 'react-icons/fi'
// RiEmpathizeLine RiHeartsLine
// import { Storage } from 'aws-amplify'

function Goals() {
  //   async function uploadPhoto(file) {
  //     Storage.put('profile.png', file, {
  //       contentType: 'image/png',
  //       level: 'private'
  //     })
  //       .then(result => {
  //         console.log(result)
  //         // for the sake of the demo, force a reload to see the uploaded picture
  //         window.location.reload()
  //       })
  //       .catch(err => console.log(err));
  //   }
  const colors = useColorModeValue(
    [ '#e6e6fa', '#E6EDEC', '#fbeff5', '#aac8f475', '#E9EBEF', '#ffe8bc8a' ],
    [ '#764d74', '#4d4d76', '#2e3648', '#e6e6fa', 'teal.900', 'blue.900' ],
  )

// #EAE0EE #F2E5E1 #E6EDEC #FOEEED


  const [ tabIndex, setTabIndex ] = React.useState(0)
  const bg = colors[ tabIndex ]

  return (
    <div>
      <Container centerContent maxW='container.sm' minH='300px' py='5' px='3' color='gray.500'>
        <Text fontSize='2xl' mb={ '2' }>
          Goals
        </Text>


        <Container maxW='2xl' minH='100vh'>
          <Box>
            <Tabs onChange={ (index) => setTabIndex(index) } bg={ bg } size={ 'sm' } height={ '500px' }>
              <TabList justifyContent={ 'center' }>

                <Grid templateColumns='repeat(6, 1fr)' gap={ 1 } bg={ 'lavendar' } fontSize={ 'xs' }>

                  <Tab px={ '0' }>
                    <GridItem w='100%' h='10' >
                      <IconButton bg={ 'transparent' } icon={ <RiHeart2Line /> } />
                    </GridItem>
                  </Tab>

                  <Tab px={ '0' }>
                    <GridItem w='100%' h='10' >
                      <IconButton bg={ 'transparent' } icon={ <MdAccessAlarms /> } />

                    </GridItem>
                  </Tab>

                  <Tab px={ '0' }>
                    <GridItem w='100%' h='10' >
                      <IconButton bg={ 'transparent' } icon={ <BiGift /> } />

                    </GridItem>
                  </Tab>

                  <Tab px={ '0' }>
                    <GridItem w='100%' h='10' >
                      <IconButton bg={ 'transparent' } icon={ <MdOutlineRoomService /> } />

                    </GridItem>
                  </Tab>

                  <Tab px={ '0' }>
                    <GridItem w='100%' h='10' >
                      <IconButton bg={ 'transparent' } icon={ <BsPeople /> } />

                    </GridItem>
                  </Tab>


                  <Tab px={ '0' }>
                    <GridItem w='100%' h='10' >
                      <IconButton bg={ 'transparent' } icon={ <FiMessageCircle /> } />

                    </GridItem></Tab>

                </Grid>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text textAlign={ 'center' }>Custom</Text>
                </TabPanel>

                <TabPanel>
                  <Text textAlign={ 'center' }>quality time</Text>
                </TabPanel>
                <TabPanel>
                  <Text textAlign={ 'center' }>recieving gifts</Text>
                </TabPanel>

                <TabPanel>
                  <Text textAlign={ 'center' }>                  acts of service
                  </Text>

                </TabPanel>

                <TabPanel>
                  <Text textAlign={ 'center' }> physical touch</Text>


                </TabPanel>

                <TabPanel>
                <Text textAlign={ 'center' }>words of affirmation</Text>


                </TabPanel>


              </TabPanels>

            </Tabs>
          </Box>


          {/* <Center py={ 6 }>
            <Box
              maxW={ '270px' }
              w={ 'full' }
              bg={ useColorModeValue('white', 'gray.800') }
              boxShadow={ '2xl' }
              rounded={ 'md' }
              overflow={ 'hidden' }>
               <input
                type="file" accept='image/png'
                onChange={ (e) => uploadPhoto(e.target.files[ 0 ]) }
              />


              <Box
                h={ '130px' }
                w={ 'full' }

                objectFit={ 'cover' }
              />
              <Flex justify={ 'center' } mt={ -12 } borderRadius={ '50%' }>
                 <Avatar
                  size={ 'xl' }
                  src={
                    ''
                  }
                  alt={ 'Author' }
                  css={ {
                    border: '2px solid white',
                  } }
                /> 
                 <AmplifyS3Image level='private' imgKey={ 'profile.png' } id="profilePic" /> 
              </Flex>
              <Box p={ 4 }>
                <Stack spacing={ 0 } align={ 'center' } mb={ 3 }>
                  <Heading fontSize={ '2xl' } fontWeight={ 500 } mb='3' fontFamily={ 'body' }>

                  </Heading>
                  <Text textAlign={'center'}> fontSize='sm' color={ 'gray.500' }>Paired with @user</Text>
                </Stack>

                <Stack direction={ 'row' } justify={ 'center' } spacing={ 6 }>

                </Stack>


              </Box>
            </Box>
          </Center> */}
        </Container>
      </Container>

    </div>
  )
}

export default Goals


