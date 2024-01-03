import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import backgroundImage from "../bathtub2.jpg";
import ImageSlider from "./ImageSlider";
import bathtub2 from "../bathtub2.jpg";
import tub from "../tub.jpg";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleGetQuoteClick = () => {
    navigate("/quote");
  };
  return (
    <Container maxWidth="xl">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          className="content"
          style={{ textAlign: "center", color: "black" }}
        >
          <Typography variant="h3" gutterBottom>
            LET'S REFINISH, NOT REPLACE.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            NEED A QUOTE? GET ONE TODAY. Save Time and Money! Save thousands of
            dollars in renovation by refinishing your tub, sink, or tiles rather
            than buying new ones.
          </Typography>
          <Button
            onClick={handleGetQuoteClick}
            variant="outlined"
            size="large"
            style={{
              marginTop: 15,
              color: "white",
              backgroundColor: "blue",
              borderRadius: "20px",
              fontSize: "20px",
              padding: "10px",
            }}
          >
            GET YOUR FREE QUOTE
          </Button>
        </div>
      </div>

      <div style={{ padding: "20px", textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h4" gutterBottom>
          BATHTUB REFINISHING SPECIALISTS
        </Typography>
        <Typography variant="h4" paragraph>
          Welcome to Phoenix Bathtubs, your bathtub refinishing experts. We
          offer high-quality, affordable solutions to revitalize your bathtub,
          sink, tiles, and more. Save time and money by refinishing your
          bathroom fixtures instead of replacing them.
        </Typography>
      </div>

      <div style={{ marginTop: "50px" }}>
        <Typography variant="h4" gutterBottom>
          Our Projects
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="img-slider" style={{ marginRight: "10px" }}>
            <ImageSlider images={[bathtub2, tub]} />
          </div>
          <div className="img-slider">
            <ImageSlider images={[tub, bathtub2]} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
