import { Box } from "@mui/material";
import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Layout from "../layout";
import Breadcrumb from "../../components/Breadcrumb";

function Contact() {
  return (
    <Layout>
      <Box padding={"50px 23px"}>
        <Breadcrumb path={["Home", "Contact"]} />
        <LeftSide />
        <RightSide />
      </Box>
    </Layout>
  );
}

export default Contact;
