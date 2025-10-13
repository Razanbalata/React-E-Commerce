import React, { useState } from "react";
import HeaderDiv from "../components/header/HeaderDiv";
import Footer from "../components/footer/Footer";
import { Box, Container } from "@mui/material";

function Layout({ children, headerConfig }) {
  // حالة تسجيل الدخول
  const [isLoggedIn, setIsLoggedIn] = useState(true);  

  return (
    <Box overflow="hidden">
      <HeaderDiv
        isLoggedIn={isLoggedIn}
        headerConfig={headerConfig} // أي أيقونات تظهر
      />
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
