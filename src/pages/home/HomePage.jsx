import React from "react";
import HeaderDiv from "../../components/header/HeaderDiv";
import Container from "@mui/material/Container";
import HeroSection from "../../pages/home/heroSection/HeroSction";
import CategoriesDiv from "../../pages/home/categories/CategoriesDiv";
import ImagesSection from "../../pages/home/arrival/ImagesSection";
import FullServices from "../../pages/home/services/FullServices";
import Footer from "../../components/footer/Footer";
import TodaySection from "../../pages/home/product/TodaySection";
import ThisMonthSection from "../../pages/home/product/ThisMonthSection";
import OurProductsSection from "../../pages/home/product/OurProductsSection";
import CategoriesDashboard from "../../pages/home/arrival/CategoriesDashboard";

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
