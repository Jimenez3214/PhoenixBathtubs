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

const Liners = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <div className={classes.textContainer}>
        <Typography variant="body1" className={classes.text}>
          Bathtub Liners
          <br />
          <br />
          Bathtub Liners are Acrylic units, formed to fit over your specific
          bathtub. Every Bathtub Liner is custom molded, not a "one size fits
          all" unit. Bathtub Liners are installed in your home, measured and
          scribed on-site for an exact fit. Every installation includes a new
          drain and overflow plate.
          <br />
          <br />
          Bathtub Liners are durable, high gloss, easy to clean, and include a
          formed, non-slip bottom. They will last for virtually a lifetime, and
          in most cases, you will save 50% or more over replacement costs.
          <br />
          <br />
          Wall Surround Systems
          <br />
          <br />
          Our Wall Surround System is designed to fit right over your existing
          bathtub walls. This is a 3-panel system, manufactured of ABS Acrylic.
          The panels are approximately 1/8 inch thick, and can extend from floor
          to ceiling in nearly all installations. Each panel has a formed
          "bull-nose" edge for a finished look. Included with each installation
          is a surface mounted soap dish.
          <br />
          <br />
          As with Bathtub Liners, you can expect your Wall Surround to last
          virtually a lifetime.
        </Typography>
      </div>
      <div className={classes.imageContainer}>
        <img src={tub} alt="Dummy Image" className={classes.image} />
      </div>
    </Paper>
  );
};

export default Liners;
