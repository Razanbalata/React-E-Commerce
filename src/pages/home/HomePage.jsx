import React from "react";
import HeaderDiv from "../../components/header/HeaderDiv";
import Container from "@mui/material/Container";
import HeroSection from "../../pages/home/heroSection/HeroSction";
import CategoriesDiv from "../../pages/home/categories/CategoriesDiv";
import ImagesSection from "../../pages/home/arrival/ImagesSection";
import FullServices from "./services/FullServices";
import Footer from "../../components/footer/Footer";
import TodaySection from "../../pages/home/product/TodaySection";
import ThisMonthSection from "../../pages/home/product/ThisMonthSection";
import OurProductsSection from "../../pages/home/product/OurProductsSection";
import CategoriesDashboard from "../../pages/home/arrival/CategoriesDashboard";
import Layout from "../layout";
import ScrollTopButton from "./ScrollTopButton";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <TodaySection />
      <CategoriesDiv />
      <ThisMonthSection />
      <CategoriesDashboard />
      <OurProductsSection />
      <ImagesSection />
      <FullServices bordered={"false"}/>
      <ScrollTopButton/>
    </Layout>
  );
}

export default HomePage;
