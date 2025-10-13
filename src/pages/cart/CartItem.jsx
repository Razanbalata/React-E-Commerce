// CartItem.jsx
import { Box, Typography, CardMedia } from "@mui/material";
import { useState } from "react";
import Counter from "./Counter";

export default function CartItem({ name, price, quantity }) {
  const [qty, setQty] = useState(quantity);
  const total = (price * qty).toFixed(2);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "row", md: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "flex-start", md: "center" }}
      p={2}
      mt={1}
      boxShadow="0 0 5px rgba(0,0,0,0.2)"
      borderRadius={1}
      bgcolor="white"
      gap={{ xs: 1, md: 0 }}
    >
      {/* المنتج + صورة */}
      <Box display="flex" alignItems={{xs:"flex-start",sm:"center"}} flexDirection={{xs:"column",sm:"row"}} flex={{xs:.6,sm:1,md:.7}} gap={1}>
        <CardMedia
          component="img"
          src="/public/images/New folder (2)/exploreImages/04a1915fd6cedd7c8b1073685c5f1be1b50e1ac6.png"
          alt={name}
          sx={{ width: 60, height: 60, objectFit: "cover", borderRadius: 1 }}
        />
        <Typography>{name}</Typography>
      </Box>

      {/* الكمية + السعر + الإجمالي */}
      <Box
        display="flex"
        flexDirection={{ xs: "row", md: "row" }}
        flex={1.5}
        alignItems="center"
        justifyContent="space-between"
        gap={{ xs: 1, md: 0 }}
        mt={{ xs: 1, md: 0 }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>${price}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Counter value={qty} onChange={setQty} />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>${total}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
