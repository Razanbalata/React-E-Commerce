// CartHeader.jsx
import { Box, Typography } from "@mui/material";

export default function CartHeader() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "row", md: "row" }}
      justifyContent="space-between"
      p={2.3}
      mt={1}
      boxShadow="0 0 3px rgba(0,0,0,0.3)"
      borderRadius={1}
      gap={{ xs: 6, md: 1 }}
    >
      <Typography fontWeight="bold" flex={1.1}>
        Product
      </Typography>
      <Typography fontWeight="bold" flex={{sx:1,sm:1,md:2}} textAlign={{ xs: "left",sm:"end" ,md: "center" }}>
        Price
      </Typography>
      <Typography fontWeight="bold" flex={{sx:1,sm:1,md:2}} textAlign={{ xs: "left",sm:"end", md: "center" }}>
        Quantity
      </Typography>
      <Typography fontWeight="bold" flex={1} textAlign={{ xs: "right", md: "right" }}>
        Total
      </Typography>
    </Box>
  );
}
