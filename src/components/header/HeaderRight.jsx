import React, { useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import SearchComp from "./SearchComp";
import HeaderIcons from "../icons/HeaderIcons";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BurgerDrawer from "./BurgerDrawer";

const HeaderRight = () => {
  const [open,setOpen] = useState(false)

   function toggleDrawer(open){
    setOpen(open)
   };


   return (<Box display="flex" alignItems="center" gap={1}>
    {/* Search يظهر على التابلت ويختفي على الموبايل */}
    <Box sx={{ display: { xs: "none", sm: "flex" } }} >
      <SearchComp />
    </Box>

    {/* أيقونة بحث تظهر على الموبايل */}
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
    </Box>

    <HeaderIcons />

    {/* Hamburger يظهر على الموبايل فقط */}
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
    </Box>
   
      <BurgerDrawer open={open} onClose={() => toggleDrawer(false)} />
  </Box>)
};

export default HeaderRight;
