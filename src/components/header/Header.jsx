import React from "react";
import { Box, Divider } from "@mui/material";
import HeaderLeft from "../header/HeaderLeft";
import HeaderRight from "../header/HeaderRight";

const Header = () => {
  return (
    <Box>
      {/* Container الرئيسي */}
      <Box
        display="flex"
        flexDirection={{ lg: "row" }}
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: "1170px",
          mx: "auto",
          px: { xs: 1, lg: 0 },
          py: { xs: 1, lg: 0 },
          gap: { xs: 0, lg: 0 },
          justifyContent:{xs:"space-between",sm:"space-between",md:"space-around",lg:"space-between"}
        }}
      >
        {/* Left: Logo + Navigation */}
        <Box
          component="header"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 1,
            height: 64,
          }}
        >
          <HeaderLeft />
        </Box>

        {/* Right: Search + Icons + Hamburger */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <HeaderRight />
        </Box>
      </Box>

      {/* Divider / Underline */}
      <Divider
        sx={{
          borderColor: "rgba(0,0,0,0.1)",
          mt: 0,
          width: "100%",
        }}
      />
    </Box>
  );
};

export default Header;
