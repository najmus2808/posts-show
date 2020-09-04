import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {id, title} = props.post;

    const postStyle = {
        border:'1px solid blue',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }
    return (
        <div style={postStyle}>
            <h1>Title: {title}</h1>
            <Link to={`/post/${id}`}>
            <button>See Detail</button>
            </Link>
            
        </div>
    );
};

export default Post;