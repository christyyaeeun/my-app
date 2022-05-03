import React, { useState, useEffect } from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  IconButton,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Spacer,
  Container,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  VStack,
} from '@chakra-ui/react';
import { Auth, Storage } from 'aws-amplify';
import { RiVipCrownLine } from 'react-icons/ri'
import Goals from './Goals';
import { AmplifyS3Image } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

function Paired({ avatar }) {
  const [ name, setName ] = useState('');
  const [ image, setImage ] = useState('');

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    let user = await Auth.currentAuthenticatedUser();
    console.log('user:', user);
    console.log('user attributes: ', user.attributes);
    setName(user.username);
  }

  //     async function getAvatar() {
  // const imageKey = await Storage.get('profile.png' { level: 'private' });
  //     avatar.image = imageKey;
  //     return avatar;
  //     }

  //   async function uploadPhoto(file) {
  //     Storage.put('profile.png', file, {
  //       contentType: 'image/png',
  //       level: 'private',
  //     })
  //       .then(result => {
  //         console.log(result);
  //         // for the sake of the demo, force a reload to see the uploaded picture
  //         window.location.reload();
  //       })
  //       .catch(err => console.log(err));
  //   }

  async function getPhoto() {
    const avatar = Storage.get('profile.png', avatar, {
      contentType: 'image/png',
      level: 'private',
    })
      .then(result => {
        console.log(result);
        setImage();
        // <AmplifyS3Image level='private' imgKey={ 'profile.png' } id="profilePic" />

      })
      .catch(err => console.log(err));
  }

  const [ sliderValue, setSliderValue ] = useState(50)

  return (
    <>
      <Container h={ '100%' } mb={ '8' }>
        {/* <Box mt='1em'>
        <IconButton as={ Link } to="/goals"
          size={ 'lg' }
          boxShadow={ 'xl' }
          bg={ useColorModeValue('gray.5z0', 'gray.600') }
          variant='ghost' icon={ <RiVipCrownLine /> } />
      </Box> */}
        <Center py={ 6 }>
          <Box
            maxW={ '350px' }
            w={ 'full' }
            bg={ useColorModeValue('#f5f5f5', 'gray.800') }
            boxShadow={ 'xl' }
            rounded={ 'lg' }
            overflow={ 'hidden' }
          >
            {/* <Image
            h={'130px'}
            w={'full'}
            filter='auto'
            brightness='105%'
            src={
              'https://firebasestorage.googleapis.com/v0/b/olt-amplify.appspot.com/o/bgbrown.png?alt=media&token=c5db8a43-c90a-449e-a78c-93262fee8a2f'
            }
            objectFit={'cover'}
          /> */}
            <Box h={ '100px' }
              w={ 'full' } bg={ '' }>

            </Box>
            <Flex p={ 6 } mt={ '-2em' } justify={ 'space-evenly' }>
              <Flex mt={ -12 }>
                <Avatar
                  as={ Button }
                  size={ 'xl' }
                  src={ avatar }
                  bg={ 'gray.300' }
                  alt={ 'Author' }
                  css={ {
                    border: '2px solid white',
                  } }
                />
              </Flex>
              <Box maxW={ '50px' } mt={ '-1.5em' } >
                <Image w={ 'sm' } src={ 'https://firebasestorage.googleapis.com/v0/b/olt-amplify.appspot.com/o/colorlogo%20.svg?alt=media&token=0e607de1-d81d-4175-8d2d-0e38539a0bc3' } />
              </Box>
              <Flex justify={ 'center' } mt={ -12 }>
                <Avatar
                  as={ Button }
                  size={ 'xl' }
                  src={ '' }
                  bg={ 'gray.300' }
                  alt={ 'Author' }
                  css={ {
                    border: '2px solid white',
                  } }
                />
              </Flex>
            </Flex>


            <Flex p={ 6 }>
              <Flex justify={ 'center' } mt={ -12 } align={ 'start' }>
                <Box ml={ '2em' }>
                  <Text fontWeight={ 600 } color={ useColorModeValue('#56799c', 'white') }
                  >
                    { name }
                  </Text>
                </Box>
              </Flex>
              <Spacer />
              <Flex justify={ 'center' } mt={ -12 }>
                <Box mr={ '1.6em' }>
                  <Text fontWeight={ 600 } color={ useColorModeValue('#56799c', 'white') }
                  >
                    partner
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Container w={ '100%' } bg={ useColorModeValue('#f5f5f5', 'gray.600') }
            >
              <Box >
                <Stack spacing={ 0 } align={ 'center' } mt={ '-2.5em' } pb={ 7 }>
                  <Text color={ useColorModeValue('gray.500', 'white') } py={ '2' }> Together for </Text>
                  <Container maxW={ 'sm' }>
                    <Stack direction={ 'row' } spacing={ '4' } justify={ 'center' }>

                      <Box width={ '50px' } p={ '1' } borderRadius={ 'sm' } bg={ 'white' } boxShadow={ 'lg' }>
                        <VStack>
                          <Text fontSize={ '.9rem' } fontWeight={ '600' } color={ 'gray.500' } mb={ '-0.5em' } pt={ '.3em' }>
                            1
                          </Text>
                          <Text fontSize={ '.5rem' } m={ '0' } color={ 'gray.500' }>year</Text>
                        </VStack>                    </Box>
                      <Box width={ '50px' } p={ '1' } borderRadius={ 'sm' } bg={ 'white' } boxShadow={ 'lg' }>
                        <VStack>
                          <Text fontSize={ '.9rem' } fontWeight={ '600' } color={ 'gray.500' } mb={ '-0.5em' } pt={ '.3em' }>
                            5
                          </Text>
                          <Text fontSize={ '.5rem' } m={ '0' } color={ 'gray.500' }>months</Text>
                        </VStack>
                      </Box>
                      <Box width={ '50px' } p={ '1' } borderRadius={ 'sm' } bg={ 'white' } boxShadow={ 'lg' }>
                        <VStack>
                          <Text fontSize={ '.9rem' } fontWeight={ '600' } color={ 'gray.500' } mb={ '-0.5em' } pt={ '.3em' }>
                            10
                          </Text>
                          <Text fontSize={ '.5rem' } m={ '0' } color={ 'gray.500' }>days</Text>
                        </VStack>
                      </Box>
                    </Stack>
                    <Box>
                    </Box>
                  </Container>
                </Stack>


              </Box>
            </Container>
          </Box>

        </Center>
        <Container maxW={ 'lg' }>
          <Goals />


        </Container>
        {/* <Box>
        <Image
          maxW={'150px'}
          w={'full'}
          src={
            'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/note.svg?alt=media&token=3797344a-029e-47c9-b6ae-7a7b9f111b29'
          }
        />
      </Box> */}
        <Container maxH={ '4xl' } >
          {/* <Box m={ '3' } p={ '9' } bg={ useColorModeValue('ivory', 'gray.400') } h={ '300px' } display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } fontSize='sm' boxShadow={ '2xl' } borderRadius={ 'xl' }>


          <Slider aria-label='slider-ex-6' onChange={ (val) => setSliderValue(val) } color={ 'gray.500' }>
            <SliderMark value={ 0 } mt='1' ml='-2.5' fontSize='xs' color={ useColorModeValue('gray.500', 'white') }>
              0%
            </SliderMark>
            <SliderMark value={ 25 } mt='1' ml='-2.5' fontSize='xs' color={ useColorModeValue('gray.500', 'white') }>
              25%
            </SliderMark>
            <SliderMark value={ 50 } mt='1' ml='-2.5' fontSize='xs' color={ useColorModeValue('gray.500', 'white') }>
              50%
            </SliderMark>
            <SliderMark value={ 75 } mt='1' ml='-2.5' fontSize='xs' color={ useColorModeValue('gray.500', 'white') }>
              75%
            </SliderMark>
            <SliderMark value={ 100 } mt='1' ml='-2.5' fontSize='xs' color={ useColorModeValue('gray.500', 'white') }>
              100%
            </SliderMark>
            <SliderMark
              borderRadius={ 'lg' }
              value={ sliderValue }
              textAlign='center'
              bg='#7da1ff'
              color='white'
              mt='-10'
              ml='-5'
              w='12'
            >
              { sliderValue }%
            </SliderMark>
            <SliderTrack bg={ useColorModeValue('#b1b0b8', 'white') }
            >
              <SliderFilledTrack bg={ '#7da1ff' } />
            </SliderTrack>
            <SliderThumb />
          </Slider>


        </Box> */}
        </Container>
      </Container>

    </>
  );
}

export default Paired;
