import React from "react";
import Layout from "../Layout";
import { Box } from "@mui/material";
import Breadcrumb from "../../components/Breadcrumb";
import AboutHero from "./AboutHero";
import FullServices from "../home/services/FullServices";
import AboutRow from "./AboutRow";
import AboutServices from "./AboutServices";

function About() {
  return (
    <Layout>
      <Box
        padding={{ xs: "50px 30px", md: "50px 0 50px 15px" }}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Breadcrumb path={["Home", "About"]} />
        <AboutHero />
        <AboutServices/>
        <AboutRow/>
        <FullServices bordered={false}/>
      </Box>
    </Layout>
  );
}

export default About;
