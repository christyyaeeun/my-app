import React from 'react'
import {  Text, WrapItem, Wrap, Center, Container } from '@chakra-ui/react'

export const Communication = () => {
    return (
        <Container pt='8'maxW='xl'>
            <Center mb='5'>
    <Text fontSize='lg' color='gray.600'>
    Communication
    </Text>
    </Center>
            <Container centerContent >

            <Wrap spacing='30px' justify='center'>
  <WrapItem>
    <Center w='180px' h='80px' bg='red.200'>
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='green.200'>
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='tomato'>
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='blue.200'>
      Box 4
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='blackAlpha.500'>
      Box 5
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='teal.200'>
      Box 6
    </Center>
  </WrapItem>
</Wrap>
</Container>
        </Container>

    )
}
