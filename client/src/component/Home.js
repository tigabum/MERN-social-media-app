import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import home_image from "./../assets/images/home_image1.webp";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(3),
    background: theme.background,
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      3
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box component="span" m={1} className={classes.header}>
      <Typography variant="h6" className={classes.title}>
        Home Page
      </Typography>
      <Link to="/users">Users</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      </Box>

      <CardMedia
        className={classes.media}
        image={home_image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Welcome to our social media app{" "}
        </Typography>
      </CardContent>
    </Card>
  );
}
