import React from "react";
import { Box, Typography } from "@mui/material";
import CustomAction from "./CustomAction";

function FlashSaleHeader({
  children,
  title,
  useIcon = true,
  showIcons = true,
}) {
  return (
    <Box
      sx={{
        maxWidth: "1170px",   
        margin: "0 auto",    
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 2,
        my: 3,
      }}
    >
      {/* Left: Title + Timer */}
      <Box display="flex" alignItems="end" gap={13} flexShrink={0}>
        <Typography variant="h5" fontSize={30} fontWeight="bold" color="#000">
          {title}
        </Typography>
        {children}
      </Box>

      {/* Right: Navigation Arrows or Button */}
      {showIcons && <CustomAction useIcon={useIcon} />}
    </Box>
  );
}

export default FlashSaleHeader;
