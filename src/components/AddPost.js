import React from 'react';
// import Button from './Button';
// import { v4 as uuid } from 'uuid';
// import { Storage, API, Auth } from 'aws-amplify';
// import { createPost } from './graphql/mutations';
import { Textarea, Input, Stack, Button, Container, Box } from '@chakra-ui/react'



export default function AddPost() {


  return (
    <Box maxW='md' borderRadius='lg' shadow='xl' p='6'>
    <Container maxW='container.md' centerContent>
    <Box maxW='sm' borderRadius='lg'  p='4' overflow='hidden'>
        <Stack spacing={3}>
          <Input placeholder='Title' size='sm' />
          <Textarea placeholder='Enter your post...' />
        </Stack>
        <Button mt='4' colorScheme='blue' size='sm'>Save</Button>

      </Box>
    </Container>
    </Box>
  )
}
