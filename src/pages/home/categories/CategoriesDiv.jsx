import { Box, Divider } from "@mui/material";
import React from "react";
import SectionTitle from "../product/SectionTitle";
import FlashSaleHeader from "../product/FlashSaleTimer";
import CategoriesRow from "./CategoriesRow";
import {Container} from "@mui/material";

function CategoriesDiv() {
  return (
    <Box maxWidth="lg" padding={{xs:2,md:0,lg:0}}>
      <SectionTitle text="Categories" />
      <FlashSaleHeader title="Browse By Category" showTimer={false} />
      <CategoriesRow />
      <Divider sx={{
          borderColor: "rgba(0,0,0,0.1)",
          my: 8,
          width: "100%",
        }}  fullWidth />
    </Box>
  );
}

export default CategoriesDiv;
