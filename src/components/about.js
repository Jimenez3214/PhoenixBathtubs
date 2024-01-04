import React from "react";
import office from "../img/Phoenix.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <img src={office} alt="office" className="about-img" />
      <p className="about-text">
        Phoenix Bathtub Renewals, Inc. "Your source for affordable bathroom
        renovation" has been proudly serving the Chicago metropolitan area since
        1984. This family owned and operated business specializes in economical
        alternatives to bathroom fixture replacement. We've built a solid
        reputation of honesty, quality, and service through hard work, and by
        listening to what our customers have to say. We look forward to serving
        you.
      </p>
    </div>
  );
};

export default About;
