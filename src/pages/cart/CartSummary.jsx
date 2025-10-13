import { Box, Typography, Divider, Button } from "@mui/material";
import ButtonCom from "../../components/buttons/ButtonCom";
import { Link } from "react-router-dom";

export default function CartSummary({ subtotal, shipping }) {
  const total = subtotal + shipping;

  return (
    <Box
      sx={{
        border: "1px solid #000",
        borderRadius: 1,
        padding: "1.5rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Cart Total
      </Typography>

      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>Subtotal:</Typography>
        <Typography fontWeight="bold">${subtotal.toFixed(2)}</Typography>
      </Box>
      <Divider sx={{ my: 1 }} />

      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>Shipping:</Typography>
        <Typography fontWeight="bold">${shipping.toFixed(2)}</Typography>
      </Box>
      <Divider sx={{ my: 1 }} />

      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography fontWeight="bold">Total:</Typography>
        <Typography fontWeight="bold">${total.toFixed(2)}</Typography>
      </Box>

      <Box display={"flex"} justifyContent={"center"} mt={2}>
        <Link to="../checkout" style={{ width: "100%" }}>
          <Box display={"flex"} justifyContent={"center"}>
            <ButtonCom
              value="Proceed to Checkout"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: "1.5rem", textTransform: "none" }}
              showOnMobile
            />
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
