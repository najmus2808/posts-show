import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  let { id } = useParams();

  const [post, setPost] = useState({});
  const { title, body } = post;

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  const postStyle = {
    border:'1px solid blue',
    margin:'20px',
    padding:'20px',
    borderRadius:'10px'
}
  return (
    <div style={postStyle}>
      <h1>Id: {id}</h1>
      <h2>Title: {title}</h2>
      <h3>Description: {body}</h3>
    </div>
  );
};

export default PostDetail;
