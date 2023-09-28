import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import tub from '../tub.jpg';
import { styled } from "@mui/material/styles";

const CustomButton = styled(Link)(({ theme }) => ({
    color: "#1d2d44",
    textDecoration: "none",
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
    return (
        <nav>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
                    .customFont {
                        font-family: 'Source Code Pro', monospace;
                    }
                `}
            </style>
            <CustomAppBar>
                <Toolbar>
                    <Link to="/">
                        <img src={tub} alt="Logo" style={{ marginRight: "16px" }} />
                    </Link>
                    <CustomButton to="/" className="customFont">Home</CustomButton>
                    <CustomButton to="/about" className="customFont">About Us</CustomButton>
                    <CustomButton to="/contact" className="customFont">Contact</CustomButton>
                    <CustomButton to="/services" className="customFont">Services</CustomButton>
                </Toolbar>
            </CustomAppBar>
        </nav>
    );
};

export default NavBar;



