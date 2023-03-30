import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import home_image from './../assets/images/home_image1.webp'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(3),
    background: theme.background
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(3)}px`,
    color:theme.palette.openTitle
  },
  media: {
    minHeight: 400,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            SM
          </Avatar>
        }
      /> */}
      <Typography variant='h6'className={classes.title}>
          Home Page
      </Typography>
      <CardMedia
        className={classes.media}
        image={home_image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Welcome to our social media app        </Typography>
      </CardContent>
    </Card>
  );
}


