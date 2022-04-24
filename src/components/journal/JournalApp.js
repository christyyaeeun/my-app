// import React, { useState, useEffect } from 'react';
// import Amplify, { Hub } from '@aws-amplify/core';
// import { DataStore, Predicates } from '@aws-amplify/datastore';
// import { Todo } from '../../models';
// import format from 'date-fns/format';
// import awsconfig from '../../aws-exports';
// Amplify.configure(awsconfig);

// // async function listEntries(setEntries) {
// //   const entry = await DataStore.query(Entry, Predicates.ALL);
// //   setEntries(entries);
// // }

// function JournalApp() {
//   const [entries, setEntries] = useState([]);
//   const [userEntries, updateUserEntries] = useState([]);
//   const [displayAdd, setDisplayAdd] = useState(true);
//   const [displayUpdate, setDisplayUpdate] = useState(false);
//   const [displaySearch, setDisplaySearch] = useState(false);
//   const [id, setId] = useState('');

//   async function handleSubmit(e) {
//     const { name, description, image } = formState;

//     e.preventDefault();
//     e.stopPropagation();

//     await DataStore.save(
//        const entryInfo = {
//         name,
//         description,
//         image: formState.image.name,
//         id: postId,
//       };
//     );
//     listEntries(setEntries);
//     setValue('');
//   }

//   function onCreate(){
//     new Entry({
//       name: '',
//       description: '',
//       image: {},
//       date: ${Date.now()}
//     })
//   }

//   /* fetch posts when component loads */
//   useEffect(() => {
//     fetchEntries();
//     checkUser(); // new function call

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   async function checkUser() {
//     const user = await Auth.currentAuthenticatedUser();
//     console.log('user:', user);
//     console.log('user attributes: ', user.attributes);
//   }

//   async function fetchEntries() {
//     /* query the API, ask for 100 items */
//     let postData = await API.graphql({
//       query: listPosts,
//       variables: { limit: 100 },
//     });
//     let postsArray = postData.data.listPosts.items;

//     /* map over the image keys in the posts array, get signed image URLs for each image */
//     postsArray = await Promise.all(
//       postsArray.map(async post => {
//         const imageKey = await Storage.get(post.image);

//         post.image = imageKey;
//         return post;
//       })
//     );
//     /* update the posts array in the local state */

//     setPostState(postsArray);
//   }

//   async function setPostState(postsArray) {
//     const user = await Auth.currentAuthenticatedUser();
//     const userPostData = postsArray.filter(p => p.owner === user.username);
//     updateUserPosts(userPostData);
//     updatePosts(postsArray);
//   }

//   function subscribe() {
//     API.graphql({
//       query: onCreatePost,
//     }).subscribe(() => fetchPosts());
//   }

//   useEffect(() => {
//     fetchPosts();
//     const subscription = subscribe();
//     return () => subscription();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
// }
