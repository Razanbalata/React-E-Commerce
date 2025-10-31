import React from "react";
import CartItem from "./CartItem";
import { Box } from "@mui/material";


export default function CartItems({items}) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
    </Box>
  );
}
