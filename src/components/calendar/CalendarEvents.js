import React from 'react';
import { Center, HStack, Box, useColorModeValue } from '@chakra-ui/react';

export default function CalendarEvents() {
  return (
    <>
      <Center>
        <HStack
          maxW={'450px'}
          bg={'#fbeff8'}
          h={'70px'}
          boxShadow={'2xl'}
          rounded={'md'}
          mt={'4'}
        >
          <Box
            minW={'80px'}
            h={'70px'}
            bg={useColorModeValue('#fbeff8', 'gray.800')}
          ></Box>

          <Box
            bg={useColorModeValue('white', 'gray.900')}
            h={'70px'}
            m={'0'}
            width={'250px'}
          ></Box>
        </HStack>
      </Center>

      <Center>
        <HStack
          maxW={'450px'}
          bg={'#eff0fb'}
          h={'70px'}
          boxShadow={'2xl'}
          rounded={'md'}
          mt={'4'}
        >
          <Box
            minW={'80px'}
            h={'70px'}
            bg={useColorModeValue('#eff0fb', 'gray.800')}
          ></Box>

          <Box
            bg={useColorModeValue('white', 'gray.900')}
            h={'70px'}
            m={'0'}
            width={'250px'}
          ></Box>
        </HStack>
      </Center>

      <Center>
        <HStack
          maxW={'450px'}
          bg={'#e3f0ff'}
          h={'70px'}
          boxShadow={'2xl'}
          rounded={'md'}
          mt={'4'}
        >
          <Box
            minW={'80px'}
            h={'70px'}
            bg={useColorModeValue('#e3f0ff', 'gray.800')}
          ></Box>

          <Box
            bg={useColorModeValue('white', 'gray.900')}
            h={'70px'}
            m={'0'}
            width={'250px'}
          ></Box>
        </HStack>
      </Center>

      <Center>
        <HStack
          maxW={'450px'}
          bg={'#e9f4f7'}
          h={'70px'}
          boxShadow={'2xl'}
          rounded={'md'}
          mt={'4'}
        >
          <Box
            minW={'80px'}
            h={'70px'}
            bg={useColorModeValue('#e9f4f7', 'gray.800')}
          ></Box>

          <Box
            bg={useColorModeValue('white', 'gray.900')}
            h={'70px'}
            m={'0'}
            width={'250px'}
          ></Box>
        </HStack>
      </Center>
    </>
  );
}
