import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);


  const [images, setImages] = useState();

  useEffect(() => {
    const url = `https://loremflickr.com/600/400?random=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, [id]);

  const postStyle = {
    border:'1px solid blue',
    margin:'20px',
    padding:'20px',
    borderRadius:'10px'

  }

  const comStyle = {
    textAlign:'center',
    color:'red'

  }

    return (
      <div>
          <div style={postStyle}>
          <h1 style={comStyle}><strong>Post Details</strong></h1>
    <h1>Id: {post.id}</h1>
    <h2>Title: {post.title}</h2>
    <h3>Description: {post.body}</h3>
    <hr/>

    <h1 style={comStyle}><strong>Comment Section</strong></h1>

    {
      comments.map(comment => <div>
        <img src={images} alt="" height="200" width="200"/>
      <h3>{comment.body}</h3>
      </div>)
    }
          </div>
      </div>
  );
};

export default PostDetail;
