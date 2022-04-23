
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { API, Storage } from "aws-amplify";
import { getPost } from "../../graphql/queries";
import { format } from "date-fns";

export default function Post() {
  const [loading, updateLoading] = useState(true);
  const [post, updatePost] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPost() {
    try {
      const postData = await API.graphql({
        query: getPost,
        variables: { id },
      });
      const currentPost = postData.data.getPost;
      const image = await Storage.get(currentPost.image);

      currentPost.image = image;
      updatePost(currentPost);
      updateLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  if (loading) return <h3>Loading...</h3>;
  console.log("post: ", post);

  return (
    <div>
      <div className="post-wrapper">
        <h1 className="title">{post.name}</h1>
        <p>{post.description}</p>
        <img alt="post" src={post.image} className={imageStyle} />
        <p>@{post.username}</p>
        <small>{format(new Date(post.createdAt), "MM/dd/yyyy")}</small>
      </div>
    </div>
  );
}

// const titleStyle = css`
//   margin-bottom: 7px;
// `;

const imageStyle = styled`
  max-width: 500px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
