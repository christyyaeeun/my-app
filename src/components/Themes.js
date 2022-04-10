import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Container,
    SimpleGrid
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const Themes = (props) => {
    let navigate = useNavigate();
    // const categories = [
    //     {
    //         id: 'Communication',
    //         to: '/communication'
    //     },
    //     {
    //         id: 'QualityTime',
    //         to: '/qualitytime',
    //     },
    // {
    //         id: 'Conflict',
    //         to: '/conflict'
    // }


    //     ]


    return (
        <>




            <Container maxW='2xl'>

                <SimpleGrid minChildWidth='200px' spacing='30px'>
                    <div onClick={() => navigate('/communication')}>

                        <Center py={6}>
                            <Box maxW={'250px'} w={'full'} bg={useColorModeValue('white', 'gray.900')}
                                boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                                <Box h={'150px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                                    <Image rounded={'lg'}
                                        height={150} width={282} objectFit={'contain'}
                                        src={'https://firebasestorage.googleapis.com/v0/b/auth0-altitude.appspot.com/o/chat.png?alt=media&token=cd164a1e-1da7-46f0-92eb-8687760799f0'}

                                    />
                                </Box>
                                <Stack>
                                    <Text color={'gray.500'} textTransform={'uppercase'} fontWeight={700} fontSize={'sm'}>
                                        Theme
                                    </Text>
                                    <Heading color={useColorModeValue('#738dbb', 'white')}
                                        fontSize={'1xl'} fontFamily={'body'}> Communication</Heading>
                                    <Text color={'gray.500'}> Focus
                                    </Text>
                                </Stack>
                            </Box>
                        </Center>

                    </div>
                    <div onClick={() => navigate('/qualitytime')}>

                        <Center py={6}>
                            <Box maxW={'250px'} w={'full'} bg={useColorModeValue('white', '#f2e6f0')} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                                <Box h={'150px'} bg={'#f2e6f0'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                                    <Image id="talking" rounded={'lg'} height={150} width={282} objectFit={'contain'}
                                        src={'https://firebasestorage.googleapis.com/v0/b/auth0-altitude.appspot.com/o/talking.png?alt=media&token=a64c2fcb-50b7-44d9-ab7a-4984502bcd42'}

                                    />
                                </Box>
                                <Stack>
                                    <Text color={'gray.500'} textTransform={'uppercase'} fontWeight={700} fontSize={'sm'} >
                                        Theme
                                    </Text>
                                    <Heading color={useColorModeValue('#d7b3d1', 'white')} fontSize={'1xl'} fontFamily={'body'}>
                                        Quality Time
                                    </Heading>
                                    <Text color={'gray.500'}>
                                        Here's some tips
                                    </Text>
                                </Stack>
                            </Box>
                        </Center></div>

                    <div onClick={() => navigate('/conflict')}>

                        <Center py={6}>
                            <Box maxW={'250px'} w={'full'} bg={useColorModeValue('white', '#f2e6f0')} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                                <Box h={'150px'} bg={'#f9aeaf'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                                    <Image id="talking" rounded={'lg'} height={150} width={282} objectFit={'contain'}
                                        src={''}

                                    />
                                </Box>
                                <Stack>
                                    <Text color={'gray.500'} textTransform={'uppercase'} fontWeight={700} fontSize={'sm'} >
                                        Theme
                                    </Text>
                                    <Heading color={useColorModeValue('#e4959d', 'white')} fontSize={'1xl'} fontFamily={'body'}>
                                        Conflict
                                    </Heading>
                                    <Text color={'gray.500'}>
                                        Here's some tips
                                    </Text>
                                </Stack>
                            </Box>
                        </Center></div>


                    <div onClick={() => navigate('/growth')}>

                        <Center py={6}>
                            <Box maxW={'250px'} w={'full'} bg={useColorModeValue('white', 'gray.900')}
                                boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                                <Box h={'150px'} bg={'#ffe48cc4'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                                    <Image rounded={'lg'}
                                        height={150} width={282} objectFit={'contain'}
                                        src={''}

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

                    </div>


                </SimpleGrid>

            </Container>

        </>
    )
}


export default Themes