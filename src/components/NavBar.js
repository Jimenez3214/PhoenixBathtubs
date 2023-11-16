import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import tub from "../tub.jpg";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Link)(({ theme }) => ({
  color: "black",
  textDecoration: "none",
  marginLeft: "20px",
  fontSize: "30px",
  "&:hover": {
    color: "#748cab",
    cursor: "pointer",
  },
}));

const CustomAppBar = styled(AppBar)({
  backgroundColor: "white",
  position: "fixed",
  zIndex: 1000,
  top: 0,
  left: 0,
  right: 0,
  height: "100px",
  padding: "10px",
});

const NavBar = () => {
  return (
    <nav>
      <CustomAppBar>
        <Toolbar>
          <img
            src={tub}
            alt="Logo"
            style={{ height: "80px", marginLeft: "40px" }}
          />
          <ul
            style={{ listStyle: "none", display: "flex", marginLeft: "auto" }}
          >
            <li>
              <CustomButton to="/" className="customFont">
                Home
              </CustomButton>
            </li>
            <li>
              <CustomButton to="/services" className="customFont">
                Services
              </CustomButton>
            </li>
            <li>
              <CustomButton to="/about" className="customFont">
                About Us
              </CustomButton>
            </li>
            <li>
              <CustomButton to="/contact" className="customFont">
                Contact
              </CustomButton>
            </li>
            <li>
              <CustomButton to="/faq" className="customFont">
                FAQs
              </CustomButton>
            </li>
          </ul>
        </Toolbar>
      </CustomAppBar>
    </nav>
  );
};

export default NavBar;
