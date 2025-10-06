import React from "react";
import { Box, Button } from "@mui/material";

function ButtonCom({ value, bg = "#DB4444", showOnMobile = false }) {
  return (
    <Box>
      <Button
      type="submit"
        variant="contained"
        sx={{
          backgroundColor: bg,
          textTransform: "capitalize",
          padding: "10px 50px",
          display: showOnMobile ? "block" : { xs: "none", sm: "block" },
        }}
      >
        {value}
      </Button>
    </Box>
  );
}

export default ButtonCom;
