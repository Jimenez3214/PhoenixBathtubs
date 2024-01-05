import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import tubBefore from "../img/tub_before.jpg";
import tubAfter from "../img/tub_after.jpg";
import tileBefore from "../img/tile_before.jpg";
import tileAfter from "../img/tile_after.jpg";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ImageSlider = ({ beforeImage, afterImage }) => {
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

  const images = [
    {
      imgPath: beforeImage,
    },
    {
      imgPath: afterImage,
    },
  ];

  return (
    <Box sx={{ maxWidth: 720, flexGrow: 1 }}>
      <Typography>{images[activeStep].label}</Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
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
                  height: "400px", // Set the desired height for both images
                  display: "block",
                  maxWidth: "100%",
                  width: "100%",
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
          size="large"
          onClick={handleBack}
          disabled={activeStep === 0}
          startIcon={<KeyboardArrowLeft />}
        >
          Before
        </Button>
        <Button
          size="large"
          onClick={handleNext}
          disabled={activeStep === images.length - 1}
          endIcon={<KeyboardArrowRight />}
        >
          After
        </Button>
      </div>
    </Box>
  );
};

export default ImageSlider;
