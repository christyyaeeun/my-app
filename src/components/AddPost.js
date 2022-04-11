import React from 'react';
// import Button from './Button';
// import { v4 as uuid } from 'uuid';
// import { Storage, API, Auth } from 'aws-amplify';
// import { createPost } from './graphql/mutations';
import { Textarea, Input, Stack, Button, Container, Box } from '@chakra-ui/react'



function AddPost() {


  return (
    <Box minW='250px' minH='250px' borderRadius='lg' shadow='xl'>
    <Container maxW='container.lg' centerContent  pt='6'>
    <Box borderRadius='lg'  p='4' overflow='hidden'>
        <Stack spacing={3} minW='250px'>
          <Input placeholder='Title' size='sm' />
          <Textarea placeholder='Enter your post...' />
        </Stack>
        <Button mt='4' colorScheme='gray' shadow='sm' size='sm'>Save</Button>

      </Box>
    </Container>
    </Box>
  )
}

export default AddPost