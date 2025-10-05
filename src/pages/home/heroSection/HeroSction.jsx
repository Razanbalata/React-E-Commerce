import React from "react";
import { Box } from "@mui/material";
import ListBar from "../heroSection/ListBar";
import HeroDashboard from "../heroSection/HeroDashboard";

const HeroSection = () => (
  <Box
    sx={{
      minWidth: "1170px",
      margin: "0 auto",
      display: { xs: "block", md: "flex" },
      justifyContent: "space-between",
      height: { xs: "auto", md: 344 },
      marginBottom: { xs: 16, md: 15 },
    }}
  >
    <ListBar  />
    <HeroDashboard />
  </Box>
);

export default HeroSection;

