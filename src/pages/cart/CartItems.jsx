import React from "react";
import CartItem from "./CartItem";
import { Box } from "@mui/material";

const cartData = [
  { id: 1, name: "Apple iPhone", price: 83.74, quantity: 1 },
  { id: 2, name: "Samsung Galaxy", price: 97.14, quantity: 1 },
  { id: 3, name: "Nike Air Max", price: 68.71, quantity: 1 },
  { id: 4, name: "Adidas Ultraboost", price: 85.21, quantity: 1 },
];

export default function CartItems() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      {cartData.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </Box>
  );
}
