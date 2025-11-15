import { Box, Typography, CardMedia, Button } from "@mui/material";
import { useState, useContext } from "react";
import Counter from "./Counter";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(GlobalContext);
  const [qty, setQty] = useState(item.quantity);

  const total = (item.price * qty).toFixed(2);

  const handleChange = (newQty) => {
    setQty(newQty);
    updateQuantity(item.id, newQty);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      p={2}
      mt={1}
      boxShadow="0 0 5px rgba(0,0,0,0.2)"
      borderRadius={1}
      bgcolor="white"
      gap={2}
      sx={{
        overflowX: { xs: "auto", md: "visible" },
        whiteSpace: "nowrap",
        minWidth: { xs: "100%", md: "auto" },
      }}
    >
      {/* --- Product --- */}
      <Box
        display="flex"
        flexWrap={{xs:"wrap",sm:"nowrap"}}
        alignItems="center"
        gap={1}
        flex={2}
      >
        <CardMedia
          component="img"
          src={item.images[0]}
          alt={item.title}
          sx={{ width: 60, height: 60, objectFit: "cover", borderRadius: 1 }}
        />
        <Typography>{item.title}</Typography>
      </Box>

      {/* --- Price --- */}
      <Box flex={1} textAlign="center">
        <Typography>${item.price}</Typography>
      </Box>

      {/* --- Quantity --- */}
      <Box flex={1} display="flex" justifyContent="center">
        <Counter value={qty} onChange={handleChange} />
      </Box>

      {/* --- Total --- */}
      <Box flex={1} textAlign="center">
        <Typography>${total}</Typography>
      </Box>

      {/* --- Delete --- */}
      <Box flex={1} textAlign="center">
        <Button
          color="error"
          onClick={() => removeFromCart(item.id)}
          sx={{ fontSize: "1.2rem" }}
        >
          ❌
        </Button>
      </Box>
    </Box>
  );
}
