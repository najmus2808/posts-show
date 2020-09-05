import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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

  
  
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


  const classes = useStyles();
  
  

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
         Post Details
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Title: {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          Description: {post.body}
        </Typography>
      </CardContent>
<hr/>
      <CardContent>
        <Typography variant="h5" component="h2">
         Comment Section
        </Typography>
        <Typography className={classes.title} color="textSecondary">
        {comments.map((comment) => (
          <div>
           <div style={{display:'flex'}}>
           <img style={{borderRadius:'50%', padding:'10px'}} src={`https://loremflickr.com/600/400?random=${comment.id}`}
              alt=""
              height="50"
              width="50"
            />
            <h3 style={{padding:'10px' }}>{comment.name}</h3>
           </div>

            <div>
            {comment.body}
            <hr/>
          </div>

          </div>
        ))}
        </Typography>
      </CardContent>
      
      
    </Card>
  );
};

export default PostDetail;
