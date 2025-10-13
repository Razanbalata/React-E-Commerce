import React from "react";
import Layout from "../Layout";
import Breadcrumb from "../../components/Breadcrumb";
import { Box } from "@mui/material";
import Details from "./Details";
import ProductSection from "../home/product/ProductSection";
import TodaySection from "../home/product/TodaySection";
import ThisMonthSection from "../home/product/ThisMonthSection";

function ProductDetails() {
  return (
    <Layout>
      <Box padding={{ xs: "50px 30px", md: "50px 0px" }}>
        <Breadcrumb path={["Account", "Gaming", "Havic HV G-92 Gamepad"]} />
        <Details/>
        <ThisMonthSection showHead={false} />
      </Box>
    </Layout>
  );
}

export default ProductDetails;
