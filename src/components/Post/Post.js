import React from 'react';

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
            <h3>{id}</h3>
            <h1>{title}</h1>
        </div>
    );
};

export default Post;