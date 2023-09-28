import React from "react";
import backgroundImage from '../bathtub2.jpg';
import logo from '../tub.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import QuoteForm from "../QuoteForm";

const useStyles = makeStyles(theme => ({
  /* Styles from the OnePirate template */
  container: {
    // ... Add styles from OnePirate container
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden',
  },
  content: {
    // ... Add styles from OnePirate content
    padding: theme.spacing(8, 0, 6),
  },
  
  textUnderImage: {
    fontSize: '2em',
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white
  },
  exploreButton: {
    marginTop: theme.spacing(2),
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px', 
    borderRadius: '25px',
    margin: '0 auto'
  },
  textContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: theme.spacing(2),
    color: theme.palette.text.primary
  },
  quoteFormContainer: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
  }
}));

const Home = () => {
    return (
      <div className="container">
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="content">
            <Typography variant="h4" className="textUnderImage">
              LET'S REGLAZE, NOT REPLACE.
            </Typography>
            <Button variant="outlined" className="exploreButton">
              GET YOUR FREE
            </Button>
          </div>
        </div>
        <div className="content">
          <div className="textContainer">
            <Typography variant="h5">
              BATHTUB REGLAZING SPECIALISTS
            </Typography>
            <Typography variant="body1">
              NEED A QUOTE? GET ONE TODAY. Save Time and Money! Save thousands of dollars in renovation by refinishing your tub, sink, or tiles rather than buying new ones.
            </Typography>
          </div>
  
          <div className="quoteFormContainer">
            <QuoteForm />
          </div>
        </div>
      </div>
    );
  };

export default Home;

