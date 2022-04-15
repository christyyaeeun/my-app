import React from 'react';
import {
    Center,
    Text,
    Stack,
    Tag,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Event() {
    return (
        <>
            <Center py={6}>
                <Stack maxW={'350px'}
                    maxH={'90px'}
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: '100%', md: '540px' }}
                    height={{ sm: '476px', md: '20rem' }}
                    direction={{ base: 'column', md: 'row' }}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'xl'}
                >

                    <Flex flex={.5} bg="gray.50">
                    </Flex>

                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        p={2}
                        >
                        <Text fontSize={'xl'} mt={'6'} fontFamily={'body'} color={'gray.700'}>
                            Event
                        </Text>

                        <Text fontSize='sm'
                            textAlign={'center'}
                            color={useColorModeValue('gray.700', 'gray.400')}
                        >
                            Schedule an event
                        </Text>
                        <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
                            <Tag bg={'pink.100'} color={'pink.500'}>Date</Tag>

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
        </>
    );
}
