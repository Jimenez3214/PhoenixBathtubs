import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import tub from "../tub.jpg";
import { styled } from "@mui/material/styles";

const CustomButton = styled(({ to, children, ...props }) => (
  <Link to={to} {...props}>
    {children}
  </Link>
))(({ theme }) => ({
  color: "#1d2d44",
  textDecoration: "none",
  marginRight: "20px",
  padding: "16px 24px",
  fontSize: "25px",
  "&:hover": {
    color: "#748cab",
    cursor: "pointer",
  },
}));

const CustomAppBar = styled(AppBar)({
  backgroundColor: "white",
  margin: 0,
  boxShadow: "none",
  position: "fixed",
  zIndex: 1000,
  top: 0,
  left: 0,
});

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsAboutOpen(false);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsServicesOpen(false);
  };

  return (
    <nav>
      <CustomAppBar>
        <Toolbar>
          <Link to="/">
            <img src={tub} alt="Logo" style={{ marginRight: "16px" }} />
          </Link>
          <CustomButton to="/" className="customFont">
            Home
          </CustomButton>
          <CustomButton className="customFont">
            <div className="dropdown">
              <span className="dropbtn" onClick={toggleServices}>
                Services
              </span>
              <div
                className={`dropdown-content ${isServicesOpen ? "show" : ""}`}
              >
                <Link to="/services/refinishing">Refinishing</Link>
                <Link to="/services/liners">
                  Bathtub Liners/ Wall Surrounds
                </Link>
              </div>
            </div>
          </CustomButton>

          <CustomButton className="customFont" to="/about">
            <div className="dropdown">
              <span className="dropbtn" onClick={toggleAbout}>
                About Us
              </span>
              <div
                className={`dropdown-content ${isServicesOpen ? "show" : ""}`}
              >
                <Link to="/about/faq">FAQs</Link>
                <Link to="/about/employment">Employment</Link>
              </div>
            </div>
          </CustomButton>
          <CustomButton to="/contact" className="customFont">
            Contact
          </CustomButton>
        </Toolbar>
      </CustomAppBar>
    </nav>
  );
};

export default NavBar;
