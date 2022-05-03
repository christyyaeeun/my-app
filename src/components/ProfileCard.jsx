import React from 'react';
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
} from '@chakra-ui/react';

export default function ProfileCard() {
    return (
        <Center py={ 6 }>
            <Box
                minW={ '300px' }
                w={ 'full' }
                bg={ useColorModeValue('white', 'gray.800') }
                boxShadow={ '2xl' }
                rounded={ 'md' }
                overflow={ 'hidden' }>
                <Box
                    h={ '120px' }
                    w={ 'full' }
                    bg={ 'gray.100' }
                    objectFit={ 'cover' }
                />
                <Flex justify={ 'center' } mt={ -12 }>
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
                </Flex>

                <Box p={ 6 }>
                    <Stack spacing={ 0 } align={ 'center' } mb={ 5 }>
                        <Heading fontSize={ '2xl' } fontWeight={ 500 } fontFamily={ 'body' }>

                        </Heading>
                        <Text color={ 'gray.500' }></Text>
                    </Stack>

                    <Stack direction={ 'row' } justify={ 'center' } spacing={ 6 }>
                        <Stack spacing={ 0 } align={ 'center' }>
                            <Text fontWeight={ 600 }></Text>
                            <Text fontSize={ 'sm' } color={ 'gray.500' }>
                            </Text>
                        </Stack>
                        <Stack spacing={ 0 } align={ 'center' }>
                            <Text fontWeight={ 600 }></Text>
                            <Text fontSize={ 'sm' } color={ 'gray.500' }>
                            </Text>
                        </Stack>
                    </Stack>

                    <Button
                        w={ 'full' }
                        mt={ 8 }
                        bg={ useColorModeValue('#cddef2', 'gray.900') }
                        color={ 'white' }
                        rounded={ 'md' }
                        _hover={ {
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        } }>
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}

