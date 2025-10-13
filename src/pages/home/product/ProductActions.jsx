import React, { useContext } from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { GlobalContext } from "../../../contexts/GlobalContext ";

export default function ProductActions({ type = "wishlist" }) {
  const iconStyle = {
    backgroundColor: "white",
    color: "black",
    p: 0.5,          // padding صغير
    borderRadius: "50%", 
    boxShadow: 1,    // ظل خفيف
  };
   
  const { addToWishlist } = useContext(GlobalContext);
 

  if (type === "wishlist") {
    return (
      <Box display="flex" flexDirection="column" gap={1}>
        <Tooltip title="Add to Wishlist">
          <IconButton sx={iconStyle} onClick={addToWishlist}>
            <FavoriteBorderIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="View Details">
          <IconButton sx={iconStyle}>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      </Box>
    );
  }

  if (type === "delete") {
    return (
      <Tooltip title="Remove Item">
        <IconButton sx={iconStyle} color="inherit">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    );
  }

  return null;
}
