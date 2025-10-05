import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function AccountColumn() {
  const links = ["My Account","Login / Register", "Cart", "Wishlist", "Shop"];

  return (
    <Box flex="1" minWidth={160}>
      <Stack spacing={1}>
        <Typography variant="subtitle1" fontWeight={600} mb={2}>Account</Typography>
        {links.map((link, idx) => (
          <Typography key={idx}>{link}</Typography>
        ))}
      </Stack>
    </Box>
  );
}
