import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { Navigate } from "react-router-dom";
import { signin } from "./api-auth";
import { auth } from "./auth-helper";

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

export default function Signin(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectValue: false,
  });
  const classes = useStyles();

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submitUser = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };
    signin(user).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        auth.authenticate(data, () => {
          setValues({ ...values, error: "", redirectValue: true });
        });
      }
    });
  };

  const { from } = props.location?.state || {
    from: {
      pathname: "/",
    },
  };
  const { redirectValue } = values;
  if (redirectValue) {
    return <Navigate to={from} />;
  }

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
            Sign In
          </Typography>
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
    </div>
  );
}
