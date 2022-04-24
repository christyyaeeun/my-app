import React from 'react'
import {
  Heading,
  Box,
  Center,
  Flex,
  Text,
  Image,
  HStack,
  Stack,
  Grid,
  StackDivider,
  GridItem,
  Spacer,
  Tooltip,
  Container,
  Button,
  useColorModeValue,
  IconButton,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';
import { BackButton } from '../../components/BackButton';
import { AmplifyS3Image } from '@aws-amplify/ui-react'

import { RiHeart2Line, RiUserHeartLine, RiChatHeartLine } from 'react-icons/ri'
import { BiGift, BiPlus, BiCoffeeTogo, BiBeenHere } from 'react-icons/bi'
import { MdAccessAlarms, MdOutlineRoomService, MdOutlineIcecream, MdOutlineSpa } from 'react-icons/md'
import { IoChatbubblesOutline } from 'react-icons/io'
import { CgShoppingBag } from 'react-icons/cg'
import { SiTinyletter } from 'react-icons/si'
import { HiOutlineSparkles, HiOutlineTicket, HiOutlineUsers } from 'react-icons/hi'
import { BsPeople, BsCardChecklist, BsCart3 } from 'react-icons/bs'
import { FiMessageCircle } from 'react-icons/fi'
import { GrToast } from 'react-icons/gr'
import './style.css'
// RiEmpathizeLine RiHeartsLine
// import { Storage } from 'aws-amplify'

function Goals() {

  const colors = useColorModeValue(
    // [ '#e6e6fa', '#E6EDEC', '#fbeff5', '#aac8f475', '#E9EBEF', '#ffe8bc8a' ],
    [ 'white', 'white', 'white', 'white', 'white', 'white' ],
    [ '#764d74', '#4d4d76', '#2e3648', '#e6e6fa', 'teal.900', 'blue.900' ],
  )

  const [ tabIndex, setTabIndex ] = React.useState(0)
  const bg = colors[ tabIndex ]

  return (
    <div>
      <Container centerContent maxW='container.sm' minH='300px' px='3' color='gray.500' m={ 'auto' }>

        {/* <Box w={ '100%' } float={ 'left' } px='5'>
          <BackButton />
        </Box> */}
        <Container centerContent>



          <Box>
            <Tooltip width={ '100%' } label="Select actionable goals based on your partner's love languages" aria-label='A tooltip'>
              <Text fontSize='2xl' flex={ '0 1 270' } mb={ '2' }>Goals</Text>
            </Tooltip>
          </Box>




        </Container>



        <Container maxW='2xl' minH='100vh'>
          <Box border={ '1px' } borderColor={ 'gray.200' } boxShadow={ 'xl' } borderRadius={ 'sm' } color={ 'gray.500' }>
            <Box fontSize={ 'sm' }>
              <Tabs onChange={ (index) => setTabIndex(index) } bg={ bg } size={ 'sm' } height={ '260px' }>
                <TabList justifyContent={ 'center' }>

                  <Grid templateColumns='repeat(6, 1fr)' gap={ 1 } bg={ 'lavendar' } fontSize={ 'xs' }>

                    <Tab _selected={ { color: 'purple.600', bg: '#e6e6fa' } }>
                      <GridItem w='100%' h='10' >
                        <IconButton bg={ 'transparent' } icon={ <RiHeart2Line /> } />
                      </GridItem>
                    </Tab>

                    <Tab _selected={ { color: '#478b7e', bg: '#c8e2df' } }>
                      <GridItem w='100%' h='10' >
                        <IconButton bg={ 'transparent' } icon={ <MdAccessAlarms /> } />
                      </GridItem>
                    </Tab>

                    <Tab _selected={ { color: '#DA83AC', bg: '#fbeff5' } } >
                      <GridItem w='100%' h='10' >
                        <IconButton bg={ 'transparent' } icon={ <BiGift /> } />
                      </GridItem>
                    </Tab>

                    <Tab _selected={ { color: '#6fa3cb', bg: '#aac8f475' } } >
                      <GridItem w='100%' h='10' >
                        <IconButton bg={ 'transparent' } icon={ <MdOutlineRoomService /> } />
                      </GridItem>
                    </Tab>

                    <Tab _selected={ { color: '#d6a339', bg: '    #f1e093' } } >
                      <GridItem w='100%' h='10' >
                        <IconButton bg={ 'transparent' } icon={ <BsPeople /> } />
                      </GridItem>
                    </Tab>

                    <Tab _selected={ { color: '#eaa434', bg: '    #f5d7a5' } } >
                      <GridItem w='100%' h='10' >
                        <IconButton bg={ 'transparent' } icon={ <FiMessageCircle /> } />
                      </GridItem>
                    </Tab>
                  </Grid>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Text textAlign={ 'center' }>Custom</Text>
                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <RiChatHeartLine /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>

                        Send your partner a text
                      </Text> <Spacer />
                    </Flex>


                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <BiCoffeeTogo /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>

                        Make a cup of coffee
                      </Text>
                      <Spacer />
                    </Flex>

                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <RiUserHeartLine /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>

                        One reason you admire them
                      </Text>
                      <Spacer />
                    </Flex>

                  </TabPanel>


                  {/* QUALITY TIME */ }
                  <TabPanel>
                    {/* <Text textAlign={ 'center' }>Quality Time</Text> */ }
                    <Container centerContent>
                      <Image ml={ '1em' } height={ '2em' } src={
                        'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/QT.svg?alt=media&token=518737f7-274a-4b54-9453-83fad4cdc9a8' } bg={ 'transparent' } />

                    </Container>
                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <BiBeenHere /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>

                        Plan a date - go somewhere new!
                      </Text>
                      <Spacer />
                    </Flex>

                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <MdOutlineIcecream /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>
                        Grab some ice cream for a nice treat
                      </Text>
                      <Spacer />
                    </Flex>
                    {/* IoBagHandleOutline  IoTicketOutline*/ }
                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <HiOutlineTicket /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>

                        Go out for a movie date
                      </Text>
                      <Spacer />
                    </Flex>
                  </TabPanel>



                  {/* RECIEVING GIFTS */ }
                  <TabPanel>
                    {/* <Text textAlign={ 'center' }>Recieving Gifts</Text> */ }
                    <Container centerContent>
                      <Image ml={ '1em' } height={ '2em' } src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/rg%20.svg?alt=media&token=9a4045e9-a170-4966-8dbd-e7a6bd10b4bf' } bg={ 'transparent' } />

                    </Container>

                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <CgShoppingBag /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>

                        Suprise them with a small gift
                      </Text>
                      <Spacer />
                    </Flex>

                    <Flex alignItems={ 'center' } h={ '100%' } pt={ '.5em' }>
                      <Image ml={ '.7em' } mr={ '.8em' } height={ '2em' } boxSize={ '1.5em' } src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/snack.svg?alt=media&token=e011c3bf-c7f0-4102-a7cf-fb1123455bac' } />
                      <Text fontSize={ 'xs' }>


                        Buy their favorite snack
                      </Text>
                      <Spacer />
                    </Flex>
                  </TabPanel>

                  {/* ACTS OF SERVICE */ }
                  <TabPanel>
                    {/* <Text textAlign={ 'center' }>Acts of Service</Text> */ }
                    <Container centerContent>
                      <Image src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/aos%20.svg?alt=media&token=8f7281fd-72aa-4f00-937c-7061ee345fbf' }></Image>
                    </Container>
                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <BsCardChecklist /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>

                        Do a task for your partner</Text> <Spacer />

                    </Flex>

                    <Flex alignItems={ 'center' } h={ '100%' } pt={ '.5em' }>

                      <Image ml={ '.6em' } src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/fried-egg.png?alt=media&token=d23c0888-3111-4940-8850-d1e2ceea4e18' } boxSize={ '1em' } mr={ '.5em' } />

                      <Text ml={ '.8em' } fontSize={ 'xs' }>
                        Make them breakfast in bed
                      </Text>
                      <Spacer />

                    </Flex>
                  </TabPanel>


                  {/* PHYSICAL TOUCH */ }
                  <TabPanel>
                    <Container centerContent>
                      <Image ml={ '1em' } height={ '2em' } src={
                        'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/PT.svg?alt=media&token=4538d897-7953-44cd-88d1-05321c1cdef3' } bg={ 'transparent' } />

                    </Container>
                    {/* <Text textAlign={ 'center' }> Physical Touch</Text> */ }
                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <MdOutlineSpa /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>

                        Give them a massage
                      </Text>
                      <Spacer />
                    </Flex>

                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <Image boxSize={ '1.5em' } ml={ '.5em' } mr={ '.8em' } height={ '2em' } src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/hugsm%20.svg?alt=media&token=1d9b5b42-b185-4a00-8470-31741b8c9cb5' } />
                      <Text fontSize={ 'xs' }>
                        Give them a long hug</Text>

                      <Spacer />
                    </Flex>
                  </TabPanel>



                  {/* WORDS OF AFFIRMATION */ }
                  <TabPanel>
                    <Container centerContent>
                      <Image ml={ '1em' } height={ '2em' } src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/woa%20.svg?alt=media&token=f26a5659-54ec-4fad-8074-2521c2f85d51' } bg={ 'transparent' } />

                      {/* https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/rg%20.svg?alt=media&token=9a4045e9-a170-4966-8dbd-e7a6bd10b4bf */ }
                    </Container>
                    {/* <Text textAlign={ 'center' }>Words of Affirmation</Text> */ }

                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <SiTinyletter /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>
                        Tell them one reason you admire them</Text>
                      <Spacer />
                    </Flex>

                    <Flex alignItems={ 'center' } h={ '100%' }>
                      <IconButton icon={ <FiMessageCircle /> } bg={ 'transparent' } />
                      <Text fontSize={ 'xs' }>
                        Give them one compliment</Text>
                      <Spacer />
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
        </Container>
      </Container>

    </div >
  )
}

export default Goals


