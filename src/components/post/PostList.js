import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function Posts({ posts = [] }) {
  return (
    <>
      <div className="timeline">
        {posts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <div key={post.id}>
              <h1 className="title">{post.name}</h1>
              <img
                alt="post"
                id="post-img"
                
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