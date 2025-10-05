import React from "react";
import { Box } from "@mui/material";
import Announcement from "../header/Announcement";
import LanguageSelector from "../header/LanguageSelector";

const TopHeaderContent = () => (
  <Box
    display={{ xs: "none", md: "grid" }}
    gridTemplateColumns="1.3fr 1fr 1fr"
    alignItems="center"
    width="100%"
    height={32} 
    bgcolor="black"
    mx="auto"
  >
    <Box></Box>

    {/* عمود الـ Announcement */}
    <Box justifySelf="start">
      <Announcement />
    </Box>

    {/* عمود الـ LanguageSelector */}
    <Box justifySelf="center" pr={1} ml={3.5}>
      <LanguageSelector />
    </Box>
  </Box>
);

export default TopHeaderContent;
