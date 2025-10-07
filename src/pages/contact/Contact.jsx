import { Box } from "@mui/material";
import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Breadcrumb from "../../components/Breadcrumb";
import Layout from "../Layout";

function Contact() {
  return (
    <Layout>
      <Box
        padding={{ xs: "50px 30px", md: "50px 0px" }}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Breadcrumb path={["Home", "Contact"]} />
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "column", md: "row" }} // 👈
          alignItems={{ xs: "center", md: "flex-start" }}
          gap={3}
        >
          <LeftSide />
          <RightSide />
        </Box>
      </Box>
    </Layout>
  );
}

export default Contact;
