import React from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";

const SearchComp = () => (
  <Box
    sx={{
      width: { xs: "100%" },
      height: 38,
      display: "flex",
      alignItems: "center",
      px: 3, 
      py: 1, 
    }}
  >
    <SearchBar />
  </Box>
);

export default SearchComp;
