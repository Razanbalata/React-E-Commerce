// Cart.jsx
import React, { useContext } from "react";
import Layout from "../Layout";
import Breadcrumb from "../../components/Breadcrumb";
import { Box } from "@mui/material";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import CartButtons from "./CartButtons";
import CouponForm from "./CouponForm";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Cart() {
  const { cartItems } = useContext(GlobalContext);
  
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 55.47;
 console.log(cartItems)
  return (
    <Layout>
      <Box padding={{ xs: "50px 20px", md: "50px 0 50px 15px" }}>
        <Breadcrumb path={["Home", "Cart"]} />
        <Box py={3}>
          <Box display={"flex"} flexDirection="column" gap={2}>
            <CartHeader />
            <CartItems items={cartItems} />
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
