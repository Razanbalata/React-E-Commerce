import React, { useContext } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { GlobalContext } from "../../contexts/GlobalContext ";
import { Badge } from "@mui/material";

function WishlistIcon() {
  const { wishlistCount } = useContext(GlobalContext);

  return (
    <Badge badgeContent={wishlistCount} color="error">
      <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer" }} />
    </Badge>
  );
}

export default WishlistIcon;
