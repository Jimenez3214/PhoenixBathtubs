import React from "react";
import { Paper, TextField, Button, Typography, Grid } from "@material-ui/core";

const QuoteForm = () => {
  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h6" gutterBottom>
        Get Your Free Quote
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Full Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 20 }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default QuoteForm;
