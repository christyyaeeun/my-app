import React from 'react'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';



function Profile() {
    return (
      <div>
        <Container centerContent maxW='container.sm' minH='300px' p='10' color='gray.500'>
          <Text fontSize='2xl'>
            Profile
          </Text>
          <Container maxW='2xl' minH='100vh'>
            <Center py={6}>
              <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Box
                  h={'130px'}
                  w={'full'}

                  objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                  <Avatar
                    size={'xl'}
                    src={
                      ''
                    }
                    alt={'Author'}
                    css={{
                      border: '2px solid white',
                    }}
                  />
                </Flex>
                <Box p={4}>
                  <Stack spacing={0} align={'center'} mb={3}>
                    <Heading fontSize={'2xl'} fontWeight={500} mb='3' fontFamily={'body'}>

                    </Heading>
                    <Text fontSize='sm' color={'gray.500'}>Paired with @user</Text>
                  </Stack>

                  <Stack direction={'row'} justify={'center'} spacing={6}>
                    {/* <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack> */}
                  </Stack>

                  {/* <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Connect
          </Button> */}
                </Box>
              </Box>
            </Center>
          </Container>
        </Container>

      </div>
    )
  }

export default Profile


