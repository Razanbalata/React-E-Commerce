import React from "react";
import { Box, Stack,Typography } from "@mui/material";

export default function QuickLinksColumn() {
  const links = ["Home", "Shop", "Contact", "About", "FAQ"];

  return (
    <Box flex="1" minWidth={160}>
      <Stack spacing={1}>
        <Typography variant="subtitle1" fontWeight={600}>Quick Links</Typography>
        {links.map((link, idx) => (
          <Typography key={idx}>{link}</Typography>
        ))}
      </Stack>
    </Box>
  );
}
