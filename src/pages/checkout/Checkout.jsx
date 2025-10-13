// CheckoutPage.jsx
import React from "react";
import Layout from "../Layout";
import BillingForm from "./BillingForm";
import Breadcrumb from "../../components/Breadcrumb";
import { Box } from "@mui/material";
import CheckoutDetails from "./CheckoutDetails";

export default function CheckoutPage() {
  return (
    <Layout>
      <Box padding={{ xs: "30px 20px", md: "50px 0" }}>
        <Breadcrumb
          path={["Home", "My Account", "Product", "View Cart", "Checkout"]}
        />

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }} // عمودي على xs وأفقي على md+
          gap={{ xs: 4, md: 6 }} // تباعد أكبر على الديسكتوب
          mt={4}
          justifyContent={"space-between"}
        >
          {/* Billing Form */}
          <Box flex={{ xs: "1 1 100%", md: "0 0 45%" }}>
            <BillingForm />
          </Box>

          {/* Checkout Details */}
          <Box flex={{ xs: "1 1 80%", md: "0 0 40%" }}>
            <CheckoutDetails />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
