import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  TextareaAutosize,
} from "@material-ui/core";

const QuoteForm = () => {
  const [typeOfService, setTypeOfService] = useState({
    residential: false,
    investment: false,
    commercial: false,
  });

  const [typeOfProject, setTypeOfProject] = useState({
    bathtub: false,
    kitchenCounters: false,
    kitchenSink: false,
    bathCounters: false,
    multipleItems: false,
  });

  const handleServiceCheckboxChange = (event) => {
    setTypeOfService({
      ...typeOfService,
      [event.target.name]: event.target.checked,
    });
  };

  const handleProjectCheckboxChange = (event) => {
    setTypeOfProject({
      ...typeOfProject,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h6" gutterBottom>
        HELLO! WE JUST NEED A BIT OF INFORMATION.
      </Typography>
      <Typography variant="body1">
        We'll be in touch as soon as possible after you submit this form. If you have any questions about the booking process, feel free to reach out to us by phone. We look forward to working with you!
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Type of Service *</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={typeOfService.residential}
                      onChange={handleServiceCheckboxChange}
                      name="residential"
                    />
                  }
                  label="Residential (Owner Occupied)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={typeOfService.investment}
                      onChange={handleServiceCheckboxChange}
                      name="investment"
                    />
                  }
                  label="Investment Property (Rental or Flip)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={typeOfService.commercial}
                      onChange={handleServiceCheckboxChange}
                      name="commercial"
                    />
                  }
                  label="Commercial (Apartment, Hotel, Industrial)"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Type of Project *</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={typeOfProject.bathtub}
                      onChange={handleProjectCheckboxChange}
                      name="bathtub"
                    />
                  }
                  label="Bathtub & Surround or Shower"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={typeOfProject.kitchenCounters}
                      onChange={handleProjectCheckboxChange}
                      name="kitchenCounters"
                    />
                  }
                  label="Kitchen Counters"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={typeOfProject.kitchenSink}
                      onChange={handleProjectCheckboxChange}
                      name="kitchenSink"
                    />
                  }
                  label="Kitchen Sink"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={typeOfProject.bathCounters}
                      onChange={handleProjectCheckboxChange}
                      name="bathCounters"
                    />
                  }
                  label="Bath Counters and/or Sink"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={typeOfProject.multipleItems}
                      onChange={handleProjectCheckboxChange}
                      name="multipleItems"
                    />
                  }
                  label="Multiple Items"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Full Name *" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email *" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone *" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address *" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Location of project (city or zip)"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              aria-label="Describe Your Project"
              placeholder="Describe Your Project"
              minRows={3}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <input type="file" accept="image/*" />
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
