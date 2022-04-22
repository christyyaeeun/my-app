import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import styled from "@emotion/styled";
import Post from "./Post";
import { listPosts } from "../../graphql/queries";
import { updatePost, deletePost } from "../../graphql/mutations";

const Container = styled("div")`
  max-width: 800px;
  margin: 16px auto;
  width: 100%;
`;

const Posts= () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await API.graphql(graphqlOperation(listPosts));

      setPosts(
        result.data.listPosts.items.sort((a, b) => {
          if (a.updatedAt > b.updatedAt) return -1;
          else return 1;
        })
      );
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      {posts.map(post => (
        <Post key={post.id} {...post} onSaveChanges={async values => {
            const result = await API.graphql(
              graphqlOperation(updatePost, {
                input: {
                  ...post,
                  ...values
                }
              })
            );

            setPosts(
              posts.map(n => {
                return n.id === post.id ? result.data.updatePost : n;
              })
            );
          }}
          onDelete={async () => {
            await API.graphql(
              graphqlOperation(deletePost, {
                input: {
                  id: post.id
                }
              })
            );

            setPosts(posts.filter(n => n.id !== post.id));
          }}
        />
      ))}
    </Container>
  );
};

export default Posts;