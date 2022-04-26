import React from 'react';
import { Box, Stack, Flex, Container, Divider } from '@chakra-ui/react';
export default function Grid() {
  return (
    <>
      <Flex mt={'1em'}>
        <Container mt={'1'} py={'3'} bg={'#f6f6f6'}>
          <Container
            maxW={'4xl'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Stack
              spacing={'3'}
              display={'flex'}
              justify={'center'}
              alignItems={'baseline'}
              flexDirection={'row'}
            >
              <Box
                m={'2'}
                boxSize={'150px'}
                boxShadow={'xl'}
                bg={'white'}
                borderRadius={'xl'}
              ></Box>

              <Box
                boxSize={'150px'}
                boxShadow={'xl'}
                bg={'white'}
                borderRadius={'xl'}
              ></Box>
            </Stack>
          </Container>
          <Container>
            <Stack
              mt={'-0.6em'}
              spacing={'3'}
              display={'flex'}
              justify={'center'}
              alignItems={'baseline'}
              flexDirection={'row'}
            >
              <Box
                m={'2'}
                boxSize={'150px'}
                boxShadow={'xl'}
                bg={'white'}
                borderRadius={'xl'}
              ></Box>
              <Box
                boxSize={'150px'}
                boxShadow={'xl'}
                bg={'white'}
                borderRadius={'xl'}
              ></Box>
            </Stack>
          </Container>
        </Container>
      </Flex>
    </>
  );
}

// #F4F4F4
