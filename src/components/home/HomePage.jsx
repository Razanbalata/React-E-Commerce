import React from "react";
import HeaderDiv from "../header/HeaderDiv";
import Container from "@mui/material/Container";
import HeroSection from "../heroSection/HeroSction";
import CategoriesDiv from "../categories/CategoriesDiv";
import ImagesSection from "../arrival/ImagesSection";
import FullServices from "../services/FullServices";
import Footer from "../footer/Footer";
import TodaySection from "../product/TodaySection";
import ThisMonthSection from "../product/ThisMonthSection";
import OurProductsSection from "../product/OurProductsSection";
import CategoriesDashboard from "../arrival/CategoriesDashboard";

function HomePage() {
  return (
    <div style={{overflow:"hidden"}}>
      <HeaderDiv />
      <Container
        maxWidth="lg" 
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" }, 
          px: { xs: 0, sm: 0, md: 2 }, 
        }}
      >
        <HeroSection />
        <TodaySection />
        <CategoriesDiv />
        <ThisMonthSection />
        <CategoriesDashboard />
        <OurProductsSection />
        <ImagesSection />
        <FullServices />
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
