// Cart.jsx
import React from "react";
import Layout from "../Layout";
import Breadcrumb from "../../components/Breadcrumb";
import { Box } from "@mui/material";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import CartButtons from "./CartButtons";
import CouponForm from "./CouponForm";

export default function Cart() {
  const subtotal = 83.74 + 97.14 + 68.71 + 85.21;
  const shipping = 55.47;

  return (
    <Layout>
      <Box padding={{ xs: "50px 20px", md: "50px 0 50px 15px" }}>
        <Breadcrumb path={["Home", "Cart"]} />
        <Box py={3}>
          <Box display={"flex"} flexDirection="column" gap={2}>
            <CartHeader />
            <CartItems />
          </Box>

          {/* أزرار التحكم */}
          <CartButtons />

          {/* الكوبون + الملخص */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            gap={3}
            my={4}
          >
            <Box width={{ xs: "100%", md: "40%" }}>
              <CouponForm />
            </Box>
            <Box width={{ xs: "100%", md: "40%" }}>
              <CartSummary subtotal={subtotal} shipping={shipping} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
