import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Post = (props) => {
  const { id, title } = props.post;

  const linkStyle = {
    textDecoration:'none'
  };

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
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
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Post: {id}
        </Typography>
        <Typography variant="h5" component="h2">
          Title: {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link style={linkStyle}  to={`/post/${id}`}>
          <Button variant="contained" color="primary">
            See Detail
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
