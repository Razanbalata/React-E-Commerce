// CartHeader.jsx
import { Box, Typography } from "@mui/material";

export default function CartHeader() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2.3}
      mt={1}
      boxShadow="0 0 3px rgba(0,0,0,0.3)"
      borderRadius={1}
      gap={2}
    >
      {/* Product */}
      <Typography
        fontWeight="bold"
        flex={2}
        textAlign="left"
      >
        Product
      </Typography>

      {/* Price */}
      <Typography
        fontWeight="bold"
        flex={1}
        textAlign="center"
      >
        Price
      </Typography>

      {/* Quantity */}
      <Typography
        fontWeight="bold"
        flex={1}
        textAlign="center"
      >
        Quantity
      </Typography>

      {/* Total */}
      <Typography
        fontWeight="bold"
        flex={1}
        textAlign="center"
      >
        Total
      </Typography>

      {/* Delete */}
      <Typography
        fontWeight="bold"
        flex={1}
        textAlign="center"
      >
        Delete
      </Typography>
    </Box>
  );
}
