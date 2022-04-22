import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Themes = props => {
  let navigate = useNavigate();

  return (
    <>
      <Container maxW="2xl">
        <SimpleGrid minChildWidth="190px" spacing="20px">
          <div onClick={() => navigate('/communication')}>
            <Center py={6}>
              <Box
                maxW={'250px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.100')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
              >
                <Box
                  h={'150px'}
                  bg={'gray.100'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}
                >
                  <Image
                    rounded={'lg'}
                    height={140}
                    width={250}
                    objectFit={'contain'}
                    paddingTop={'1em'}
                    src={
                      'https://firebasestorage.googleapis.com/v0/b/auth0-altitude.appspot.com/o/chat.png?alt=media&token=cd164a1e-1da7-46f0-92eb-8687760799f0'
                    }
                  />
                </Box>
                <Stack>
                  <Text
                    color={'gray.500'}
                    textTransform={'uppercase'}
                    fontWeight={700}
                    fontSize={'sm'}
                  >
                    Theme
                  </Text>
                  <Heading
                    color={useColorModeValue('#738dbb', '#738dbb')}
                    fontSize={'1xl'}
                    fontFamily={'body'}
                  >
                    {' '}
                    Communication
                  </Heading>
                  <Text color={'gray.500'}> Focus</Text>
                </Stack>
              </Box>
            </Center>
          </div>

          <div onClick={() => navigate('/conflict')}>
            <Center py={6}>
              <Box
                maxW={'250px'}
                w={'full'}
                bg={useColorModeValue('white', '#f9aeaf')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
              >
                <Box
                  h={'150px'}
                  bg={'#f9aeaf'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}
                >
                  <Image
                    id="talking"
                    rounded={'lg'}
                    height={150}
                    width={300}
                    objectFit={'contain'}
                    marginLeft={'2.6em'}
                    src={
                      'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/conflict.png?alt=media&token=4a621d25-1388-49c8-a287-2b89beeadf44'
                    }
                  />
                </Box>
                <Stack>
                  <Text
                    color={'gray.500'}
                    textTransform={'uppercase'}
                    fontWeight={700}
                    fontSize={'sm'}
                  >
                    Theme
                  </Text>
                  <Heading
                    color={useColorModeValue('#e4959d', 'white')}
                    fontSize={'1xl'}
                    fontFamily={'body'}
                  >
                    Conflict
                  </Heading>
                  <Text color={'gray.500'}>Here's some tips</Text>
                </Stack>
              </Box>
            </Center>
          </div>

          {/* <div onClick={() => navigate('/growth')}>
                        <Center py={6}>
                            <Box maxW={'250px'} w={'full'} bg={useColorModeValue('white', '#fff9e4')}
                                boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                                <Box h={'150px'} bg={'#fff9e4'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                                    <Image rounded={'lg'}
                                        height={150} width={230} objectFit={'cover'}
                                        src={'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/flower.png?alt=media&token=6ea50d20-5f41-4c3e-8676-252adad6195e'}

                                    />
                                </Box>
                                <Stack>
                                    <Text color={'gray.500'} textTransform={'uppercase'} fontWeight={700} fontSize={'sm'}>
                                        Theme
                                    </Text>
                                    <Heading color={useColorModeValue('#e5c765', '#e5c765')}
                                        fontSize={'1xl'} fontFamily={'body'}> Growth</Heading>
                                    <Text color={'gray.500'}> Focus
                                    </Text>
                                </Stack>
                            </Box>
                        </Center>
                    </div> */}

          <div onClick={() => navigate('/growth')}>
            <Center py={6}>
              <Box
                maxW={'250px'}
                w={'full'}
                bg={useColorModeValue('white', '#ffefc8')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
              >
                <Box
                  h={'150px'}
                  bg={'#fff4cb'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}
                >
                  {/* <Image rounded={'lg'} id="growth"
                height={150} width={160} objectFit={'contain'}
                src={'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/flogrowth.png?alt=media&token=ff6ddea3-fdcc-4716-8cdb-bbff3e4e799e'}

            /> */}
                </Box>
                <Stack>
                  <Text
                    color={'gray.500'}
                    textTransform={'uppercase'}
                    fontWeight={700}
                    fontSize={'sm'}
                  >
                    Theme
                  </Text>
                  <Heading
                    color={useColorModeValue('#e5c765', '#e5c765')}
                    fontSize={'1xl'}
                    fontFamily={'body'}
                  >
                    {' '}
                    Growth
                  </Heading>
                  <Text color={'gray.500'}> Focus</Text>
                </Stack>
              </Box>
            </Center>
          </div>

          {/* <div onClick={() => navigate('/growth')}>

<Center py={6}>
    <Box maxW={'250px'} w={'full'} bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
        <Box h={'150px'} bg={'white'} mt={-6} mx={-6} mb={6} pos={'relative'}>
            <Image rounded={'lg'} id='growth'
                height={150} width={282} objectFit={'contain'}
                src={'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/growth.png?alt=media&token=19a28a62-bba2-4899-b3b1-6643f1cecc64'}

            />
        </Box>
        <Stack>
            <Text color={'gray.500'} textTransform={'uppercase'} fontWeight={700} fontSize={'sm'}>
                Theme
            </Text>
            <Heading color={useColorModeValue('#e5c765', 'white')}
                fontSize={'1xl'} fontFamily={'body'}> Growth</Heading>
            <Text color={'gray.500'}> Focus
            </Text>
        </Stack>
    </Box>
</Center>

</div> */}

          <div onClick={() => navigate('/lovelanguage')}>
            <Center py={6}>
              <Box
                maxW={'250px'}
                w={'full'}
                bg={useColorModeValue('white', '#f2e6f0')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
              >
                <Box
                  h={'150px'}
                  bg={'#f2e6f0'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}
                >
                  <Image
                    id="qualityTime"
                    rounded={'lg'}
                    height={155}
                    width={282}
                    objectFit={'contain'}
                    src={
                      'https://firebasestorage.googleapis.com/v0/b/auth0-altitude.appspot.com/o/talking.png?alt=media&token=a64c2fcb-50b7-44d9-ab7a-4984502bcd42'
                    }
                  />
                </Box>
                <Stack>
                  <Text
                    color={'gray.500'}
                    textTransform={'uppercase'}
                    fontWeight={700}
                    fontSize={'sm'}
                  >
                    Theme
                  </Text>
                  <Heading
                    color={useColorModeValue('#d7b3d1', '#d574a3')}
                    fontSize={'1xl'}
                    fontFamily={'body'}
                  >
                    Love Language
                  </Heading>
                  <Text color={'gray.500'}>Here's some tips</Text>
                </Stack>
              </Box>
            </Center>
          </div>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Themes;
