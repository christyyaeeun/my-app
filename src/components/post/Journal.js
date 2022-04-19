import '@fontsource/inter/500.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Amplify, { API, Storage, Auth } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';
import CreatePost from './CreatePost';
import { onCreatePost } from '../../graphql/subscriptions';
import Btn from './Btn';
import PostList from './PostList';
import { deletePost as deletePostMutation } from '../../graphql/mutations';
import { DataStore } from '@aws-amplify/datastore';
import { Post } from '../../models';
import { CgRemoveR } from 'react-icons/cg';
import { format, parseISO } from 'date-fns';

import {
  IconButton,
  Box,
  Container,
  Image,
  Center,
  Button,
  Text,
  Stack,
  useDisclosure,
  Spacer,
  HStack,
  Divider,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import awsconfig from '../../aws-exports.js';
Amplify.configure(awsconfig);
API.configure(awsconfig);

function Journal() {
  /* create a couple of pieces of initial state */
  const [posts, updatePosts] = useState([]);
  const [userPosts, updateUserPosts] = useState([]);
  // const [displayOverlay, updateOverlayVisibility] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // let showOverlay = isOpen;
  // let updateOverlay = onClose;

  /* fetch posts when component loads */
  useEffect(() => {
    checkUser();
    fetchPosts();
  }, []);

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log('user:', user);
    console.log('user attributes: ', user.attributes);
  }

  async function fetchPosts() {
    let postData = await API.graphql({
      query: listPosts,
      variables: { limit: 20 },
    });

    let postsArray = postData.data.listPosts.items;
    postsArray = await Promise.all(
      postsArray.map(async post => {
        const imageKey = await Storage.get(post.image, { level: 'private' });
        post.image = imageKey;
        return post;
      })
    );
    setPostState(postsArray);
  }

  async function setPostState(postsArray) {
    const user = await Auth.currentAuthenticatedUser();
    const userData = postsArray.filter(p => p.owner === user.username);
    console.log('postsArray:', postsArray);
    updateUserPosts(userData);
    updatePosts(postsArray);
  }

  function subscribe() {
    API.graphql({
      query: onCreatePost,
    }).subscribe(() => fetchPosts());
  }

  useEffect(() => {
    fetchPosts();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // async function deletePost({ id }) {
  //   const newPostsArray = posts.filter(post => post.id !== id);
  //   const toDelete = await DataStore.query(Post, id);
  //   DataStore.delete(toDelete);
  //   updatePosts(newPostsArray);

  // }

  return (
    <>
      <Container h={'100vh'}>
        <Container mt={'1em'}>
          <CreatePost updatePosts={setPostState} posts={posts} />
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
                            ``
                          </HStack>
                          <Box my={'1'}>
                            <Text
                              color={'gray.500'}
                              fontSize={'.9rem'}
                              paddingLeft={'.1em'}
                            >
                              {post.description}
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
      </Container>
    </>
  );
}

export default Journal;
