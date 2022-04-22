import React from 'react';
import Post from './Post';

import Posts from './Posts';


function Card({ posts = [] }) {
  return (
    <>
      {posts.map(post => (
        <Posts
          id={post.id}
          name={post.name}
          description={post.description}
        />
      ))}
    </>
  );
}

export default Card