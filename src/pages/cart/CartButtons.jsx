import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function CartButtons() {
  return (
    <Box display="flex" flexDirection={{ xs: "row", md: "row" }} justifyContent="space-between" gap={2} my={2}>
      <Link to='/'>
        <Button sx={{ border:'1px solid #000', padding:"10px 20px", color:"#000", textTransform:"capitalize" }}>
          Return To Shop
        </Button>
      </Link>
      <Button sx={{ border:'1px solid #000', padding:"10px 20px", color:"#000", textTransform:"capitalize" }}>
        Update Cart
      </Button>
    </Box>
  );
}
