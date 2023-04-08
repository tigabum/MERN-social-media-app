import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import { create } from "./api-user";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 34,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    open: false,
  });
  const classes = useStyles();

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submitUser = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    };
    create(user).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", open: true });
      }
    });
  };

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            variant="h6"
            component="h1"
            color="textPrimary"
            className={classes.title}
          >
            Sign Up
          </Typography>
          <TextField
            id="name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />
          <br />
          <TextField
            id="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
          />
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={handleChange("password")}
            margin="normal"
          />
          <br />
          {values.error && (
            <Typography component="p" color="error">
              {values.error}{" "}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={submitUser}
            size="small"
          >
            Submit
          </Button>
        </CardActions>
      </Card>

      <Dialog open={values.open} disableBackdropClick={true} >
        <DialogTitle id="customized-dialog-title">
          New Account
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            New Account Successfully created.
          </Typography>
        </DialogContent>
        <DialogActions>
            <Link to="/signin" >
            <Button autoFocus variant="contained" color="primary">
            Sign In
          </Button>
            </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
