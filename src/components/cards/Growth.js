import React from 'react'
import { Text, WrapItem, Wrap, Center, Container, Flex, Badge, useColorModeValue, Stack, Heading } from '@chakra-ui/react'
import { BackButton } from './BackButton'

export const Growth = () => {


    return (
        <Container centerContent maxW='container.sm' minH='300px' p='10' color='gray.500'>
            <Text fontSize='2xl'>
                Growth
            </Text>


            <BackButton />
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10} >
                <Wrap spacing='50px' justify='center' maxW='7xl'>

                    <WrapItem>
                        <Center py={6}>
                            <Stack
                                borderWidth="1px"
                                borderRadius="lg"
                                w={'330px'}
                                height={'20rem'}
                                direction={'row'}
                                bg={useColorModeValue('white', 'gray.900')}
                                boxShadow={'2xl'}
                                padding={4}>
                                <Flex flex={.6} bg="gray.200">

                                </Flex>
                                <Stack
                                    flex={1}
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={1}
                                    pt={2}>
                                    <Heading fontSize={'1xl'} fontFamily={'body'} color={'gray.500'}>
                                        Reflecting Back on 2021
                                    </Heading>
                                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>

                                    </Text>
                                    <Text
                                        textAlign={'center'}
                                        color={useColorModeValue('gray.700', 'gray.400')}
                                        px={3}>


                                    </Text>
                                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                                        <Badge
                                            px={2}
                                            py={1}
                                            bg={useColorModeValue('gray.50', 'gray.800')}
                                            fontWeight={'400'}>
                                            #Growth
                                        </Badge>
                                        <Badge
                                            px={2}
                                            py={1}
                                            bg={useColorModeValue('gray.50', 'gray.800')}
                                            fontWeight={'400'}>
                                            #love
                                        </Badge>

                                    </Stack>

                                    <Stack
                                        width={'100%'}
                                        mt={'2rem'}
                                        direction={'row'}
                                        padding={2}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Center>
                    </WrapItem>




                    <WrapItem>

                        <Center py={6}>
                            <Stack
                                borderWidth="1px"
                                borderRadius="lg"
                                w={'330px'}
                                height={'20rem'}
                                direction={'row'}
                                bg={useColorModeValue('white', 'gray.900')}
                                boxShadow={'2xl'}
                                padding={4}>
                                <Flex flex={.6} bg="gray.200">

                                </Flex>
                                <Stack
                                    flex={1}
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={1}
                                    pt={2}>
                                    <Heading fontSize={'1xl'} fontFamily={'body'} color={'gray.500'}>
                                        Working Towards Goals
                                    </Heading>
                                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>

                                    </Text>
                                    <Text
                                        textAlign={'center'}
                                        color={useColorModeValue('gray.700', 'gray.400')}
                                        px={3}>


                                    </Text>
                                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                                        <Badge
                                            px={2}
                                            py={1}
                                            bg={useColorModeValue('gray.50', 'gray.800')}
                                            fontWeight={'400'}>
                                            #Growth
                                        </Badge>
                                        <Badge
                                            px={2}
                                            py={1}
                                            bg={useColorModeValue('gray.50', 'gray.800')}
                                            fontWeight={'400'}>
                                            #love
                                        </Badge>

                                    </Stack>

                                    <Stack
                                        width={'100%'}
                                        mt={'2rem'}
                                        direction={'row'}
                                        padding={2}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Center>
                    </WrapItem>



                    <WrapItem>
                        <Center py={6}>
                            <Stack
                                borderWidth="1px"
                                borderRadius="lg"
                                w={'330px'}
                                height={'20rem'}
                                direction={'row'}
                                bg={useColorModeValue('white', 'gray.900')}
                                boxShadow={'2xl'}
                                padding={4}>
                                <Flex flex={.6} bg="gray.200">

                                </Flex>
                                <Stack
                                    flex={1}
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={1}
                                    pt={2}>
                                    <Heading fontSize={'1xl'} fontFamily={'body'} color={'gray.500'}>
                                        Love Languages
                                    </Heading>
                                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>

                                    </Text>
                                    <Text
                                        textAlign={'center'}
                                        color={useColorModeValue('gray.700', 'gray.400')}
                                        px={3}>


                                    </Text>
                                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                                        <Badge
                                            px={2}
                                            py={1}
                                            bg={useColorModeValue('gray.50', 'gray.800')}
                                            fontWeight={'400'}>
                                            #Growth
                                        </Badge>
                                        <Badge
                                            px={2}
                                            py={1}
                                            bg={useColorModeValue('gray.50', 'gray.800')}
                                            fontWeight={'400'}>
                                            #love
                                        </Badge>

                                    </Stack>

                                    <Stack
                                        width={'100%'}
                                        mt={'2rem'}
                                        direction={'row'}
                                        padding={2}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Center>
                    </WrapItem>




                    <WrapItem>

                        <Center py={6}>
                            <Stack
                                borderWidth="1px"
                                borderRadius="lg"
                                w={'330px'}
                                height={'20rem'}
                                direction={'row'}
                                bg={useColorModeValue('white', 'gray.900')}
                                boxShadow={'2xl'}
                                padding={4}>
                                <Flex flex={.6} bg="gray.200">

                                </Flex>
                                <Stack
                                    flex={1}
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={1}
                                    pt={2}>
                                    <Heading fontSize={'1xl'} fontFamily={'body'} color={'gray.500'}>
                                        Love Languages
                                    </Heading>
                                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>

                                    </Text>
                                    <Text
                                        textAlign={'center'}
                                        color={useColorModeValue('gray.700', 'gray.400')}
                                        px={3}>


                                    </Text>
                                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                                        <Badge
                                            px={2}
                                            py={1}
                                            bg={useColorModeValue('gray.50', 'gray.800')}
                                            fontWeight={'400'}>
                                            #Growth
                                        </Badge>
                                        <Badge
                                            px={2}
                                            py={1}
                                            bg={useColorModeValue('gray.50', 'gray.800')}
                                            fontWeight={'400'}>
                                            #love
                                        </Badge>

                                    </Stack>

                                    <Stack
                                        width={'100%'}
                                        mt={'2rem'}
                                        direction={'row'}
                                        padding={2}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Center>
                    </WrapItem>
                </Wrap>
            </Stack>
        </Container>

    )
}
