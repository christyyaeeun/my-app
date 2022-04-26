// import '@fontsource/inter/500.css';
// import React, { useState, useEffect } from 'react';
// import Btn from './Btn';
// import Amplify, { API, Storage, Auth } from 'aws-amplify';
// import { listPosts } from '../../graphql/queries';
// import { deletePost } from '../../graphql/mutations';
// import CreatePost from './CreatePost';
// import { onCreatePost } from '../../graphql/subscriptions';
// // import Post from './Post';
// // import Btn from './Btn';
// import PostList from './PostList';
// // import { deletePost } from '../../graphql/mutations';
// // import { format, parseISO } from 'date-fns';
// import {
//   Box,
//   Container,
//   Image,
//   Center,
//   Text,
//   Stack,
//   HStack,
//   Divider,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import awsconfig from '../../aws-exports.js';
// Amplify.configure(awsconfig);
// API.configure(awsconfig);

// function PostApp() {
//   const [posts, updatePosts] = useState([]);
//   const [userPosts, updateUserPosts] = useState([]);

//   /* fetch posts when component loads */
//   useEffect(() => {
//     fetchPosts();
//     checkUser();
//   }, []);

//   async function checkUser() {
//     const user = await Auth.currentAuthenticatedUser();
//     console.log('user:', user);
//     console.log('user attributes: ', user.attributes);
//   }

//   async function fetchPosts() {
//     let postData = await API.graphql({
//       query: listPosts,
//       variables: { limit: 20 },
//     });

//     let postsArray = postData.data.listPosts.items;
//     postsArray = await Promise.all(
//       postsArray.map(async post => {
//         const imageKey = await Storage.get(post.image, { level: 'private' });
//         post.image = imageKey;
//         return post;
//       })
//     );
//     setPostState(postsArray);
//   }

//   async function setPostState(postsArray) {
//     const user = await Auth.currentAuthenticatedUser();
//     const userData = postsArray.filter(p => p.owner === user.username);
//     console.log('postsArray:', postsArray);
//     updateUserPosts(userData);
//     updatePosts(postsArray);
//   }

//   function subscribe() {
//     API.graphql({
//       query: onCreatePost,
//     }).subscribe(() => fetchPosts());
//   }

//   /*
//   const post = await API.graphql({
//   query: mutations.deletePost,
//   variables: {input: postDetails},
//   authMode: 'AMAZON_COGNITO_USER_POOLS'
// }); */

//   //Function for removing a post
//   // async function removePost(postId) {
//   //   try {
//   //     /* query the API, ask for 100 items */
//   //     //API.graphql(graphqlOperation(deletePostEditor, { input: { id } }))
//   //     const postInfo = { id: postId };
//   //     await API.graphql({
//   //       query: deletePost,
//   //       variables: { input: postInfo },
//   //       authMode: 'AMAZON_COGNITO_USER_POOLS',
//   //     }); // updated
//   //     //updatePosts([...posts, { ...postInfo, image: formState.file, owner: username }]); // updated
//   //   } catch (err) {
//   //     console.log('error: ', err);
//   //   }
//   // }

//   // //Function for removing a post
//   // async function removePost(postId) {
//   //   try {
//   //     /* query the API, ask for 100 items */
//   //     //API.graphql(graphqlOperation(deletePostEditor, { input: { id } }))
//   //     const postInfo = { id: postId };
//   //     await API.graphql({
//   //       query: deletePost,
//   //       variables: { input: postInfo },
//   //       authMode: 'AMAZON_COGNITO_USER_POOLS',
//   //     }); // updated
//   //     //updatePosts([...posts, { ...postInfo, image: formState.file, owner: username }]); // updated
//   //   } catch (err) {
//   //     console.log('error: ', err);
//   //   }
//   // }

//   // function subscribe() {
//   //   API.graphql({
//   //     query: onCreatePost,
//   //   }).subscribe(() => fetchPosts());
//   // }

//   return (
//     <>
//       <Container h={'100vh'}>
//         <Container mt={'1em'}>
//           <CreatePost updatePosts={setPostState} posts={posts} />
//         </Container>
//         <Container p={'5'} maxW={'450px'}>
//           {/* {posts.reverse().map(post => ( */}

//           {posts.map((post, i) => (
//             <Container
//               id="card-wrap"
//               borderWidth="1px"
//               bg={useColorModeValue('white', 'gray.600')}
//               boxShadow={'2xl'}
//               rounded={'lg'}
//               p={'2'}
//             >
//               {/* <Post key={post.id} id={post.id} value={post} /> */}
//               <div id="card" key={post.id || post.name}>
//                 <Center>
//                   {/* <Btn onClick={()=>{removePost(post.id)}}/> */}

//                   <Container id="img-card" p={'0'}>
//                     <Container
//                       id="img-wrap"
//                       bg={useColorModeValue('white', 'gray.600')}
//                     >
//                       <Box
//                         id="img-container"
//                         maxW={'sm'}
//                         overflow={'hidden'}
//                         maxH={{ base: '350px', lg: '350px' }}
//                       >
//                         <Image
//                           borderRadius={'lg'}
//                           id="post-img"
//                           src={post.image}
//                           objectFit="cover"
//                           m={'auto'}
//                         />
//                       </Box>
//                     </Container>
//                     <Divider color={'gray.400'} />
//                     <Container
//                       padding={'2'}
//                       bg={useColorModeValue('white', 'gray.600')}
//                     >
//                       <Stack>
//                         <Box bg={''}>
//                           <HStack spacing="10px">
//                             <Box>
//                               <Text
//                                 color={useColorModeValue('#8cabcd', 'white')}
//                                 fontWeight={600}
//                               >
//                                 @{post.owner} |
//                               </Text>
//                             </Box>
//                             <Box>
//                               <Text
//                                 color={useColorModeValue('gray.600', 'white')}
//                                 fontSize={'1rem'}
//                               >
//                                 {post.name}
//                               </Text>
//                             </Box>
//                           </HStack>
//                           <Box my={'1'}>
//                             <Text
//                               color={useColorModeValue('gray.500', 'white')}
//                               fontSize={'.9rem'}
//                               paddingLeft={'.1em'}
//                             >
//                               {post.description}
//                             </Text>
//                             <Text color={'gray.500'}>
//                               <small>
//                                 {/* {format(new Date(post.createdAt), 'MM/dd/yyyy')} */}
//                               </small>
//                             </Text>
//                           </Box>
//                         </Box>
//                       </Stack>
//                     </Container>
//                   </Container>
//                 </Center>
//               </div>
//             </Container>
//           ))}
//         </Container>
//       </Container>
//     </>
//   );
// }

// export default PostApp();
