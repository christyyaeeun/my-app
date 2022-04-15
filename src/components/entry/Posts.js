import React, { useState, useEffect } from "react";
import { API, Storage, Auth } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';
import { Link } from "react-router-dom";
import PostList from './PostList';
import CreatePost from './CreatePost';
import Button from './Button';

function Posts ()
{
  /* create a couple of pieces of initial state */
  const [ showOverlay, updateOverlayVisibility ] = useState( false );
  const [ posts, updatePosts ] = useState( [] );
  const [ userPosts, updateUserPosts ] = useState( [] );

  /* fetch posts when component loads */
  useEffect( () =>
  {
    fetchPosts();
  }, [] );
  async function fetchPosts ()
  {
    /* query the API, ask for 100 items */
    let postData = await API.graphql( { query: listPosts, variables: { limit: 100 } } );
    let postsArray = postData.data.listPosts.items;
    /* map over the image keys in the posts array, get signed image URLs for each image */
    postsArray = await Promise.all( postsArray.map( async post =>
    {
      const imageKey = await Storage.get( post.image );
      post.image = imageKey;
      return post;
    } ) );
    /* update the posts array in the local state */
    setPostState( postsArray );
  }
  async function setPostState ( postsArray )
  {
    const user = await Auth.currentAuthenticatedUser();
    const userData = postsArray.filter( p => p.owner === user.username );
    console.log( 'postsArray:', postsArray )
    updateUserPosts( userData );
    updatePosts( postsArray );
  }
  return (
    <>

      <Button title="New Post" onClick={ () => updateOverlayVisibility( true ) } />

      { showOverlay && (
        <CreatePost
          updateOverlayVisibility={ updateOverlayVisibility }
          updatePosts={ setPostState }
          posts={ posts }
        />
      ) }


      <PostList posts={ posts } />

      <PostList posts={ userPosts } />




      <Link to="/posts">posts </Link>
      <br />
      <Link to="/post">post </Link>




    </>
  );
}


export default Posts;