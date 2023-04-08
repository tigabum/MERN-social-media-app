import { useEffect, useState } from "react";
import { list } from "./api-user";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";

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
}));

const User = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        setError(data.error);
      } else {
        setUsers(data);
        console.log("user data in frontend is", data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);
  return (
    <Paper elevation={4} className={classes.root}>
      <Typography variant="6" className={classes.title}>
        All Users
      </Typography>
      <List dense>
        {users?.map((userItem, i) => {
          return (
            <Link to={`/users/${userItem._id}`}>
              <ListItem key={i+userItem} button>
                <ListItemAvatar>
                  <Avatar
                    alt="Profile Pic"
                    src="./../assets/images/home_image1.webp"
                  />
                </ListItemAvatar>
                <ListItemText id={i} primary={userItem.name} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="comments">
                    <ArrowForwardIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Paper>
  );
};

export default User;
