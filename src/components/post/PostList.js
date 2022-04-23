import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
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
    
export default function PostList({ posts = [] }) {

  return (
      <>
      <div className="timeline">
        {posts.map((post) => (
          <Link to={`/post/${post.id}`} className={linkStyle} key={post.id}>
            <div key={post.id} className={postContainer}>
              <h1 className="title">{post.name}</h1>
              <img
                alt="post"
                id="post-img"
                className={imageStyle}
                src={post.image}
              />
               <p>
                @{post.owner}
              </p>
              <p>{post.description}</p>

             
              <small id="date">
                {format(new Date(post.createdAt), "MM/dd/yyyy")}
              </small>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

const linkStyle = styled`
  text-decoration: none;
`;

const postContainer = styled`
  border-radius: 10px;
  padding: 1px 20px;
  border: 1px solid #ddd;
  padding-bottom: 0.5em;

  margin-bottom: 20px;
  \:hover {
    border-color: #a6bbd3;
  }
`;

const imageStyle = styled`
  width: 100%;
  max-width: 400px;
`;
