import { Box, TextField } from "@mui/material";
import { useState } from "react";
import ButtonCom from "../../components/buttons/ButtonCom";

export default function CouponForm() {
  const [coupon, setCoupon] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          margin: "1rem 0",
          width: "100%",
        }}
      >
        <TextField
          name="coupon"
          type="text"
          placeholder="Coupon Code"
          required
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          sx={{
            flex: 1,
            width: { xs: "50%", md: "auto" }, // صحيح هنا
          }}
        />
        <ButtonCom
          value="Apply Coupon"
          sx={{ width: { xs: "100%", md: "auto" } }}
          showOnMobile
        />
      </Box>
    </form>
  );
}
