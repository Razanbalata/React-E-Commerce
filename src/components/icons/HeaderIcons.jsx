import React from "react";
import WishlistIcon from "./WishlistIcon";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";
import { Box } from "@mui/material";

const HeaderIcons = ({
  showUser = true,
  showWishlist = true,
  showCart = true,
}) => {
  const iconStyles = {
    wishlist: {
      bg: "#ffe5e5",       // الخلفية الافتراضية
      hoverBg: "#f44336",  // الخلفية عند hover
      color: "#000",
      hoverColor: "#fff",
    },
    cart: {
      bg: "#e0f7fa",
      hoverBg: "#00bcd4",
      color: "#000",
      hoverColor: "#fff",
    },
    user: {
      bg: "#f0f0f0",
      hoverBg: "#4caf50",
      color: "#000",
      hoverColor: "#fff",
    },
  };

  const createIcon = (IconComp, style) => (
    <Box
      sx={{
        borderRadius: "50%",
        p: 0.5,
        backgroundColor: style.bg,
        transition: "all 0.3s ease",
        "& svg": { color: style.color, transition: "all 0.3s ease" },
        "&:hover": { backgroundColor: style.hoverBg,transform: "scale(1.1)" },
        "&:hover svg": { color: style.hoverColor },
      }}
    >
      <IconComp />
    </Box>
  );

  return (
    <Box className="flex items-center gap-4">
      {showWishlist && createIcon(WishlistIcon, iconStyles.wishlist)}
      {showCart && createIcon(CartIcon, iconStyles.cart)}
      {showUser && createIcon(UserIcon, iconStyles.user)}
    </Box>
  );
};

export default HeaderIcons;
