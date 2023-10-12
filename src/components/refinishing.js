import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import tub from "../bathtub2.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  textContainer: {
    flex: 1,
    padding: theme.spacing(2),
  },
  text: {
    fontSize: "1.5rem",
    marginBottom: theme.spacing(2),
  },
  imageContainer: {
    flex: 1,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(1),
  },
}));

const Refinishing = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <div className={classes.textContainer}>
        <Typography variant="body1" className={classes.text}>
          Bathtub and Ceramic Tile Refinishing Refinishing is a process whereby
          we spray apply a coating over your bathtub or ceramic tile, in order
          to restore them to like-new condition. This durable, high gloss
          coating comes in a wide variety of colors, is very easy to clean and
          maintain, and will last for years. In most cases, refinishing will
          save you up to 85% over replacement costs.
        </Typography>
      </div>
      <div className={classes.imageContainer}>
        <img src={tub} alt="Dummy Image" className={classes.image} />
      </div>
    </Paper>
  );
};

export default Refinishing;
