import React from "react";
import { Box, Typography } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

const LanguageSelector = () => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      gap={0}
      height={24}
    >
      <Typography
        sx={{
          display: { xs: "none", md: "block" },
          color: "white",
          fontWeight: 400,
          lineHeight: "1.5", // leading-5
        }}
      >
        English
      </Typography>

      <Box
        width={24} 
        height={24} 
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ cursor: "pointer" }}
      >
        <KeyboardArrowDown
          sx={{
            width: 20, 
            height: 25,
            transform: "rotate(-90deg)",
            color: "#fff",
          }}
        />
      </Box>
    </Box>
  );
};

export default LanguageSelector;
