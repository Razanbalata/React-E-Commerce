import React from "react";
import { Drawer, Box } from "@mui/material";
import NavigationMenu from "./NavigationMenu";

const BurgerDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250, p: 2 }}>
        <NavigationMenu direction="column" onItemClick={onClose} />
      </Box>
    </Drawer>
  );
};

export default BurgerDrawer;
