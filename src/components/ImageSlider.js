import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import tub1 from '../bathtub2.jpg';
import tub2 from '../tub.jpg'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Before',
    imgPath: tub1,
  },
  {
    label: 'After',
    imgPath: tub2,
  },
];

const ImageSlider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 500, maxHeight: 500, flexGrow: 1 }}>
      <Typography>{images[activeStep].label}</Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  maxWidth: 1000,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div>
        <Button
          size="medium"
          onClick={handleBack}
          disabled={activeStep === 0}
          startIcon={<KeyboardArrowLeft />}
        >
          Back
        </Button>
        <Button
          size="medium"
          onClick={handleNext}
          disabled={activeStep === images.length - 1}
          endIcon={<KeyboardArrowRight />}
        >
          Next
        </Button>
      </div>
    </Box>
  );
};

export default ImageSlider;
