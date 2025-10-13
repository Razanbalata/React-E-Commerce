import React, { useContext, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { GlobalContext } from "../../contexts/GlobalContext ";

function CartIcon() {
  
  const { cartCount } = useContext(GlobalContext);

  return (
    <Link to={"/cart"}>
      <Badge badgeContent={cartCount} color="primary">
        <ShoppingCartOutlinedIcon sx={{ cursor: "pointer" }} />
      </Badge>
    </Link>
  );
}

export default CartIcon;
