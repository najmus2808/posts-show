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
    textDecoration: "none",
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

  const postStyle = {
    border: "3px solid purple",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    margin: "20px",
    padding: "20px",
  };

  return (
    <div>
      <Card style={postStyle} className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Title: {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Link style={linkStyle} to={`/post/${id}`}>
            <Button variant="contained" color="primary">
              See Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
