import React from "react";
// import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
    Box,
    Container,
    Image,
    Center,
    Button,
    Text,
    Stack,
    HStack,
    Divider,
    useColorModeValue
    } from '@chakra-ui/react';
export default function Posts({ posts = [] }) {
  return (
    <>
      <div className="timeline">
      <Container mt={'1em'}>
        </Container>
        <Container p={'5'} maxW={'450px'}>
          {posts.map(post => (
              
            <Container
              id="card-wrap"
              borderWidth="1px"
              bg={'white'}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={'2'}
            >
              <div id="card" key={post.id || post.name}>
                <Center>
                  <Container id="img-card" p={'0'}>
                    <Container id="img-wrap" bg={'white'}>
                      <Box
                        id="img-container"
                        maxW={'sm'}
                        overflow={'hidden'}
                        maxH={{ base: '350px', lg: '350px' }}
                      >
                        <Image
                          borderRadius={'lg'}
                          id="post-img"
                          src={post.image}
                          objectFit="cover"
                          m={'auto'}
                        />
                      </Box>
                    </Container>
                    <Divider color={'gray.400'} />
                    <Container padding={'2'} bg={'white'}>
                      <Stack>
                        <Box bg={''}>
                          <HStack spacing="10px">
                            <Box>
                              <Text color={'#8cabcd'} fontWeight={600}>
                                @{post.owner} |
                              </Text>
                            </Box>
                            <Box>
                              <Text
                                color={useColorModeValue('gray.600', 'white')}
                                fontSize={'1rem'}
                              >
                                {post.name}
                              </Text>
                            </Box>
                          
                          </HStack>
                          <Box my={'1'}>
                            <Text
                              color={'gray.500'}
                              fontSize={'.9rem'}
                              paddingLeft={'.1em'}
                            >
                              {post.description}
                            </Text>
                            <Text color={'gray.500'}>
                              <small>
                                {format(new Date(post.createdAt), 'MM/dd/yyyy')}
                              </small>
                            </Text>
                          </Box>
                        </Box>
                      </Stack>
                    </Container>
                  </Container>
                </Center>
              </div>
            </Container>
          ))}
        </Container>
      </div>
    </>
  );
}