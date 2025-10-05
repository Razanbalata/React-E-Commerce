import React from "react";
import { Box } from "@mui/material";

export default function CategoryIcon({ Icon }) {
  return (
    <Box
      className="category-icon" 
      sx={{
        fontSize: 50,
        mb: 2,
        color: "#000",
        transition: "0.3s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
          fontSize: "50px",
        },
        ":hover":{
          color:"#fff"
        }
      }}
    >
      <Icon />
    </Box>
  );
}
