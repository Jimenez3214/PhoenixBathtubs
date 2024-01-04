import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: "240px",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "240px",
  },
}));

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleMobileLinkClick = () => {
    // Close the drawer when a mobile user clicks on a navigation item
    if (isMobile) {
      handleDrawerClose();
    }
  };

  return (
    <nav>
      {isMobile ? (
        <React.Fragment>
          <CustomDrawer
            variant="temporary"
            anchor="right"
            open={openDrawer}
            onClose={handleDrawerClose}
          >
            <img
              src={tub}
              alt="Logo"
              style={{ height: "80px", marginRight: "40px" }}
            />
            <List style={{ padding: "10px", marginTop: "10px" }}>
              <ListItem disablePadding>
                <ListItemButton
                  component={CustomButton}
                  to="/"
                  className="customFont"
                  onClick={handleMobileLinkClick}
                >
                  Home
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={CustomButton}
                  to="/services"
                  className="customFont"
                  onClick={handleMobileLinkClick}
                >
                  Services
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={CustomButton}
                  to="/about"
                  className="customFont"
                  onClick={handleMobileLinkClick}
                >
                  About Us
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={CustomButton}
                  to="/contact"
                  className="customFont"
                  onClick={handleMobileLinkClick}
                >
                  Contact
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={CustomButton}
                  to="/faq"
                  className="customFont"
                  onClick={handleMobileLinkClick}
                >
                  FAQs
                </ListItemButton>
              </ListItem>
            </List>
            <IconButton
              onClick={handleDrawerClose}
              style={{ marginLeft: "auto" }}
            >
              <ChevronRightIcon />
            </IconButton>
          </CustomDrawer>
          <IconButton onClick={handleDrawerOpen} style={{ marginLeft: "auto" }}>
            <MenuIcon style={{ fontSize: "50px" }} />
          </IconButton>
          <img
            src={tub}
            alt="Logo"
            style={{ height: "80px", marginLeft: "192px" }}
          />
        </React.Fragment>
      ) : (
        <CustomAppBar>
          <Toolbar>
            <img
              src={tub}
              alt="Logo"
              style={{ height: "80px", marginLeft: "40px" }}
            />
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                marginLeft: "auto",
                padding: 0,
              }}
            >
              <li>
                <CustomButton
                  to="/"
                  className="customFont"
                  onClick={handleMobileLinkClick}
                >
                  Home
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  to="/services"
                  className="customFont"
                  onClick={handleMobileLinkClick}
                >
                  Services
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  to="/about"
                  className="customFont"
                  onClick={handleMobileLinkClick}
                >
                  About Us
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  to="/contact"
                  className="customFont"
                  onClick={handleMobileLinkClick}
                >
                  Contact
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  to="/faq"
                  className="customFont"
                  onClick={handleMobileLinkClick}
                >
                  FAQs
                </CustomButton>
              </li>
            </ul>
          </Toolbar>
        </CustomAppBar>
      )}
    </nav>
  );
};

export default NavBar;
