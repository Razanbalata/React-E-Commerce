import React from "react";
import { Box, CardMedia } from "@mui/material";

export default function ProductImage({ src, alt }) {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", p: 1.5,borderRadius:"2" }}>
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        sx={{ height: 180, objectFit: "contain", transition: "0.3s" }}
      />
    </Box>
  );
}
