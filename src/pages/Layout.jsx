import React from "react";
import HeaderDiv from "../components/header/HeaderDiv";
import Footer from "../components/footer/Footer";
import { Box,Container } from "@mui/material";

function Layout({children}) {
  return (
    <Box overflow={"hidden"}>
      <HeaderDiv />
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          px: { xs: 0, sm: 0, md: 2 },
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
}

export default Layout;
