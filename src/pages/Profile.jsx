import React from 'react'
import {
  Heading,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { AmplifyS3Image } from '@aws-amplify/ui-react'
// import { Storage } from 'aws-amplify'

function Profile() {
//   async function uploadPhoto(file) {
//     Storage.put('profile.png', file, {
//       contentType: 'image/png',
//       level: 'private'
//     })
//       .then(result => {
//         console.log(result)
//         // for the sake of the demo, force a reload to see the uploaded picture
//         window.location.reload()
//       })
//       .catch(err => console.log(err));
//   }


  
  return (
    <div>
      <Container centerContent maxW='container.sm' minH='300px' p='10' color='gray.500'>
        <Text fontSize='2xl'>
          Profile
        </Text>
     
        <Container maxW='2xl' minH='100vh'>
          <Center py={ 6 }>
            <Box
              maxW={ '270px' }
              w={ 'full' }
              bg={ useColorModeValue('white', 'gray.800') }
              boxShadow={ '2xl' }
              rounded={ 'md' }
              overflow={ 'hidden' }>
              {/* <input
                type="file" accept='image/png'
                onChange={ (e) => uploadPhoto(e.target.files[ 0 ]) }
              /> */}


              <Box
                h={ '130px' }
                w={ 'full' }

                objectFit={ 'cover' }
              />
              <Flex justify={ 'center' } mt={ -12 } borderRadius={ '50%' }>
                {/* <Avatar
                  size={ 'xl' }
                  src={
                    ''
                  }
                  alt={ 'Author' }
                  css={ {
                    border: '2px solid white',
                  } }
                /> */}
                <AmplifyS3Image level='private' imgKey={ 'profile.png' } id="profilePic" />
              </Flex>
              <Box p={ 4 }>
                <Stack spacing={ 0 } align={ 'center' } mb={ 3 }>
                  <Heading fontSize={ '2xl' } fontWeight={ 500 } mb='3' fontFamily={ 'body' }>

                  </Heading>
                  <Text fontSize='sm' color={ 'gray.500' }>Paired with @user</Text>
                </Stack>

                <Stack direction={ 'row' } justify={ 'center' } spacing={ 6 }>
          
                </Stack>

   
              </Box>
            </Box>
          </Center>
        </Container>
      </Container>

    </div>
  )
}

export default Profile


