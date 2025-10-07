import React from "react";
import { Box } from "@mui/material";
import NavItem from "../header/NavItem";
import { Link } from "react-router-dom";

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
      {navItems.map((item, index) => {
        // تحويل النص لمسار صالح
        const path =
          item.toLowerCase().replace(/\s+/g, "-") === "home"
            ? "/"
            : "/" + item.toLowerCase().replace(/\s+/g, "");

        return (
          <Link to={path} key={index} onClick={onItemClick}>
            <NavItem title={item} />
          </Link>
        );
      })}
    </Box>
  );
};

export default NavigationMenu;
