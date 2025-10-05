import React from "react";
import { Box } from "@mui/material";
import BrandLogo from "./BrandLogo";
import NavigationMenu from "./NavigationMenu";

const HeaderLeft = () => (
  <Box display="flex" alignItems="center" justifyContent={"flex-start"} gap={{xs:4,lg:27}} >
    <BrandLogo />
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <NavigationMenu />
    </Box>
  </Box>
);

export default HeaderLeft;
