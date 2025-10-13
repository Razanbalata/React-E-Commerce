import {
  Box,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  CardMedia,
  Divider,
} from "@mui/material";
import React from "react";
import CouponForm from "../cart/CouponForm";
import ButtonCom from "../../components/buttons/ButtonCom";

function CheckoutDetails() {
  const cartItems = [
    {
      id: 1,
      name: "Apple iPhone",
      price: 83.74,
      img: "/public/images/New folder (2)/exploreImages/04a1915fd6cedd7c8b1073685c5f1be1b50e1ac6.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy",
      price: 97.14,
      img: "/public/images/New folder (2)/salesImages/5e634682db5174aff99bb9337d2dc9598a0b44e4.png",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <Box sx={{ flex: 1, p: 3, borderRadius: 2, height: "fit-content",pt:14 }}>
    {cartItems.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <CardMedia
              component="img"
              src={item.img}
              alt={item.name}
              sx={{ width: 50, height: 50, borderRadius: 1 }}
            />
            <Typography>{item.name}</Typography>
          </Box>
          <Typography>${item.price.toFixed(2)}</Typography>
        </Box>
      ))}

       <Box
      sx={{
        borderRadius: "12px",
        backgroundColor: "white",
      }}
    >
      {/* Subtotal */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography>Subtotal:</Typography>
        <Typography fontWeight="bold">${subtotal.toFixed(2)}</Typography>
      </Box>
      <Divider sx={{ my: 1 }} />

      {/* Shipping */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography>Shipping:</Typography>
        <Typography fontWeight="bold">${shipping.toFixed(2)}</Typography>
      </Box>
      <Divider sx={{ my: 1 }} />

      {/* Total */}
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography fontWeight="bold">Total:</Typography>
        <Typography fontWeight="bold">
          ${total.toFixed(2)}
        </Typography>
      </Box>
    </Box>

      {/* Payment Options */}
      <Box>
        <RadioGroup
          name="payment"
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="8px"
            mt={2}
          >
            {/* القسم الأول: الراديو والنص */}
            <FormControlLabel
              value="bank"
              control={<Radio />}
              label={<Typography fontWeight="500">Bank</Typography>}
            />

            {/* القسم الثاني: صور طرق الدفع */}
            <Box display="flex" gap={1}>
              <img
                src="/public/images/bacbff99a8fc8e50822cb2d2d168e5d0e8bf7ea6.png"
                alt="Visa"
                width="40"
              />
              <img
                src="/public/images/cfb0a6ee01b240273b40dab07f8246ef98aed88a.png"
                alt="MasterCard"
                width="40"
              />
              <img
                src="/public/images/6eefb61d27c754abac218d25d8ea4360de61f8e8.png"
                alt="PayPal"
                width="40"
              />
              <img
                src="/public/images/b28e31b9c88d0c9b038b82deeb0523d82cffe267.png"
                alt="PayPal"
                width="40"
              />
            </Box>
          </Box>
          <FormControlLabel
            value="cash"
            control={<Radio />}
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography>Cash</Typography>
              </Box>
            }
          />
        </RadioGroup>
        <CouponForm />
        <ButtonCom value="Place Order" />
      </Box>
    </Box>
  );
}

export default CheckoutDetails;
