import React from "react";
import { Box } from "@mui/material";
import NavItem from "../header/NavItem"; 

const navItems = ["Home", "Contact", "About", "Sign Up"];

const NavigationMenu = ({ direction = "row", onItemClick }) => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: direction, 
        gap: 2,
      }}
    >
      {navItems.map((item, index) => (
        <Box key={index} onClick={onItemClick}>
          <NavItem title={item} />
        </Box>
      ))}
    </Box>
  );
};

export default NavigationMenu;
