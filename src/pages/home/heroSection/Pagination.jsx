import React from "react";
import { MobileStepper, Box } from "@mui/material";

export default function Pagination({ steps = 5, activeStep = 2 }) {
  return (
    <Box position="absolute" bottom="3%" left="45%">
      <MobileStepper
        variant="dots"
        steps={steps}
        position="static"
        activeStep={activeStep}
        sx={{
          background: "transparent",
          justifyContent: "center",
          "& .MuiMobileStepper-dot": {
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "gray",
            gap:"10px",
          },
          "& .MuiMobileStepper-dotActive": {
            width: 15,
            height: 15,
            bgcolor: "red",
            border: "2px solid white",
          },
        }}
      />
    </Box>
  );
}
