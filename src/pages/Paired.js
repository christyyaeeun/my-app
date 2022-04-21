import React, { useState, useEffect } from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Spacer,
  Container,
  HStack,
} from '@chakra-ui/react';
import { Auth, Storage } from 'aws-amplify';
import { AmplifyS3Image } from '@aws-amplify/ui-react';
import User from '../components/User';

function Paired({ avatar }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

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

        // for the sake of the demo, force a reload to see the uploaded picture
      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <Center py={6}>
        <Box
          maxW={'350px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <Image
            h={'130px'}
            w={'full'}
            src={
              'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/blurbg-blue-bl.JPG?alt=media&token=2dd2e771-a23e-47c8-b2ec-1dd1a45425c3'
            }
            objectFit={'cover'}
          />
          <Flex p={8} mt={'-2em'}>
            <Flex justify={'center'} mt={-12}>
              <Avatar
                as={Button}
                size={'xl'}
                src={avatar}
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Flex>
            <Spacer />
            <Flex justify={'center'} mt={-12}>
              <Avatar
                as={Button}
                size={'xl'}
                src={''}
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Flex>
          </Flex>

          <Flex p={6}>
            <Flex justify={'center'} mt={-12} align={'start'}>
              <Box ml={'2em'} mt={'-0.5em'}>
                <Text fontWeight={600} color={'#56799c'}>
                  {name}
                </Text>
              </Box>
            </Flex>
            <Spacer />
            <Flex justify={'center'} mt={-12}>
              <Box mr={'1.6em'} mt={'-0.5em'}>
                <Text fontWeight={600} color={'#56799c'}>
                  partner
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Container w={'100%'}></Container>
          <Box>
            <Stack spacing={0} align={'center'} mt={'-2.2em'} mb={5}>
              <Heading
                fontSize={'1xl'}
                fontWeight={500}
                fontFamily={'body'}
                color={'#dfc155'}
              >
                PAIRED
              </Heading>
              <Text color={'gray.500'}>Since </Text>
              <Container maxW={'sm'}>
        <Flex justify={'center'}>
          <Box w="40px" h="40px" >
            <Image
              src={
                'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/sticky%20shadow.svg?alt=media&token=77cb7be4-f89f-45bd-b107-52574f79f5f1'
              }
            />
          </Box>
          <Box w="40px" h="40px" >
            <Image
              src={
                'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/sticky%20shadow.svg?alt=media&token=77cb7be4-f89f-45bd-b107-52574f79f5f1'
              }
            />
          </Box>
          <Spacer />
          <Box w="40px" h="40px" >
            <Image
              src={
                'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/sticky%20shadow.svg?alt=media&token=77cb7be4-f89f-45bd-b107-52574f79f5f1'
              }
            />
          </Box>
          <Box w="40px" h="40px" >
            <Image
              src={
                'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/sticky%20shadow.svg?alt=media&token=77cb7be4-f89f-45bd-b107-52574f79f5f1'
              }
            />
          </Box>
          <Spacer />

          <Box w="40px" h="40px" >
            <Image
              src={
                'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/sticky%20shadow.svg?alt=media&token=77cb7be4-f89f-45bd-b107-52574f79f5f1'
              }
            />
          </Box>
          <Box w="40px" h="40px" >
            <Image
              src={
                'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/sticky%20shadow.svg?alt=media&token=77cb7be4-f89f-45bd-b107-52574f79f5f1'
              }
            />
          </Box>
        </Flex>
      </Container>
            </Stack>
          </Box>
        </Box>
      </Center>

      {/* <Box>
        <Image
          maxW={'150px'}
          w={'full'}
          src={
            'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/note.svg?alt=media&token=3797344a-029e-47c9-b6ae-7a7b9f111b29'
          }
        />
      </Box> */}
    </Container>
  );
}

export default Paired;
