// import React, { useState, useEffect } from "react";
// import { Route } from "react-router-dom";
// import { API, Storage, Auth } from "aws-amplify";
// import { listPosts } from "../../graphql/queries";
// import Posts from "./Posts";
// import Post from "./Post";
// import { onCreatePost } from '../../graphql/subscriptions';
// import CreatePost from "./CreatePost";
// import Button from "./Button";
// import { Link } from "@chakra-ui/react";



// function JApp({ user, signOut }) {

//   /* create a couple of pieces of initial state */
//   const [showOverlay, updateOverlayVisibility] = useState(false);
//   const [posts, updatePosts] = useState([]);
//   const [userPosts, updateUserPosts] = useState([]);

//   /* fetch posts when component loads */
//   useEffect(() => {
//     fetchPosts();
//     checkUser(); // new function call

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   async function checkUser() {
//     const user = await Auth.currentAuthenticatedUser();
//     console.log("user:", user);
//     console.log("user attributes: ", user.attributes);
//   }

//   async function fetchPosts() {
//     /* query the API, ask for 100 items */
//     let postData = await API.graphql({query: listPosts, variables: { limit: 100 },
//     });
//     let postsArray = postData.data.listPosts.items;
    
//     /* map over the image keys in the posts array, get signed image URLs for each image */
//     postsArray = await Promise.all(
      
//       postsArray.map(async (post) => {
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
//     const a = postsArray.filter((p) => p.owner === user.username);
//     updateUserPosts(userPostData);
//     updatePosts(postsArray);
//   }


//   function subscribe() {
//     API.graphql({
//         query: onCreatePost
//     })
//     .subscribe(() => fetchPosts())
// }

// useEffect(() => {
//   fetchPosts();
//   const subscription = subscribe();
//   return () => subscription();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);


//   return (
//     <>
//       <div className="container">
    
//             {/* <div>
//               <p className="hello">Welcome {user.username} </p>
//               <div className="divider">
//               <hr  />
//               </div>
//               <div className="new-post">
//               <Button id="new-post"
//                 title="New Post"
//                 onClick={() => updateOverlayVisibility(true)}
//               /></div>
//               <Link to="/posts">posts</Link>
//               <Link to="/userposts">ur posts</Link>
//               <Link to="/post/:id">p</Link>

          
//             </div> */}
           
//           </div>
//         {showOverlay && (
//           <CreatePost
//             updateOverlayVisibility={updateOverlayVisibility}
//             updatePosts={setPostState}
//             posts={posts}
//           />
//         )}
      
//     </>
//   );
// }




// export default JApp;