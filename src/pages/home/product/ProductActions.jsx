import React from "react";
import { Box } from "@mui/material";
import WishlistIcon from "../../../components/icons/WishlistIcon";
import VisibleEye from "../../../components/icons/VisibleEye";

export default function ProductActions() {
  return (
    <Box className="absolute top-2 right-2 flex flex-col gap-1">
    <Box className="bg-white p-1 rounded-full flex items-center justify-center shadow">
      <WishlistIcon />
    </Box>
    <Box className="bg-white p-1 rounded-full flex items-center justify-center shadow">
      <VisibleEye />
    </Box>
  </Box>
  );
}
