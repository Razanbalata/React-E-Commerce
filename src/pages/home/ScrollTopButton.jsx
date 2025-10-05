import React from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fab
      onClick={handleClick}
      color="#000"
      size="medium"
      sx={{
        bgcolor:"#F5F5F5",
        position: "fixed",
        bottom: 20,
        right: 20,
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
};

export default ScrollTopButton;
