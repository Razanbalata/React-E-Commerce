import React from "react";
import { Box, List } from "@mui/material";
import ListItemBar from "./ListItemBar";
const items = [
  { id: 1, text: "Woman’s Fashion", showIcon: true },
  { id: 2, text: "Men’s Fashion", showIcon: true },
  { id: 3, text: "Electronics", showIcon: false },
  { id: 4, text: "Home & Kitchen", showIcon: false },
  { id: 5, text: "Sports", showIcon: false },
  { id: 6, text: "Toys", showIcon: false },
  { id: 7, text: "Beauty", showIcon: false },
  { id: 8, text: "Books", showIcon: false },
  { id: 9, text: "Automotive", showIcon: false },
];
const ListBar = () => (
  <Box
    width={{ lg: "20%" }}
    borderRight="1px solid #ccc"
    pt={2}
    height="100%"
    paddingLeft={0}
    display={{xs:"none",lg:"block"}}
  >
    <List disablePadding>
      {items.map((item, index) => (
        <ListItemBar key={index} text={item.text} showIcon={item.showIcon} />
      ))}
    </List>
  </Box>
);
export default ListBar;
