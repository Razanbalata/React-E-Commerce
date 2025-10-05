import { Box, Typography } from "@mui/material";
const ProductPrice = ({ price, originalPrice, discount }) => {
  const discountedPrice = ((price * (100 - (discount || 0))) / 100).toFixed(2);
  return (
    <Box className="flex items-center gap-2">
      <Typography className="text-red-500 font-semibold">${discountedPrice}</Typography>
      {discount && <Typography className="line-through text-gray-400">${originalPrice}</Typography>}
    </Box>
  );
};
export default ProductPrice