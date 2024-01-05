import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import tub from "../img/reglaze.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  textContainer: {
    flex: 1,
    maxWidth: "600px",
    width: "100%",
    padding: theme.spacing(2),
    textAlign: "left",
  },
  text: {
    fontSize: "1.5rem",
    marginBottom: theme.spacing(2),
  },
  imageContainer: {
    flex: 1,
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(2),
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" className={classes.sectionTitle}>
        Services
      </Typography>

      <Paper className={classes.container}>
        <div className={classes.textContainer}>
          <Typography variant="h4" className={classes.sectionTitle}>
            Refinishing
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Bathtub and Ceramic Tile Refinishing is a process whereby we spray
            apply a coating over your bathtub or ceramic tile to restore them to
            like-new condition. This durable, high gloss coating comes in a
            variety of colors, is easy to clean, and will last for years. In
            most cases, refinishing will save you up to 85% over replacement
            costs.
          </Typography>
        </div>
        <div className={classes.imageContainer}>
          <img src={tub} alt="Refinishing Example" className={classes.image} />
        </div>
      </Paper>

      <Paper className={classes.container}>
        <div className={classes.textContainer}>
          <Typography variant="h4" className={classes.sectionTitle}>
            Bathtub Liners
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Bathtub Liners are custom-molded acrylic units that fit over your
            specific bathtub. They are durable, high gloss, easy to clean, and
            include a formed, non-slip bottom. Bathtub Liners will last
            virtually a lifetime, and in most cases, you will save 50% or more
            over replacement costs.
          </Typography>
        </div>
        <div className={classes.imageContainer}>
          <img
            src={tub}
            alt="Bathtub Liners Example"
            className={classes.image}
          />
        </div>
      </Paper>
    </div>
  );
};

export default Services;
