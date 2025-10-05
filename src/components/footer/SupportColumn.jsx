import React from "react";
import { Box, Stack ,Typography} from "@mui/material";

export default function SupportColumn() {
  return (
    <Box flex="1" maxWidth={170}>
      <Stack spacing={2.5}>
        <Typography variant="subtitle1" fontWeight={600}>Support</Typography>
        <Typography>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</Typography>
        <Typography>exclusive@gmail.com</Typography>
        <Typography>+88015-88888-9999</Typography>
      </Stack>
    </Box>
  );
}
