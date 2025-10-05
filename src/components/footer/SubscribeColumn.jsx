import React from "react";
import { Box, Stack, TextField, IconButton,Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function SubscribeColumn() {
  return (
    <Box flex="1" maxWidth={{sx:180,md:200,lg:200}}>
      <Stack spacing={2}>
        <Typography variant="h6" fontWeight={700}>My Page Title</Typography>
        <Typography variant="subtitle1" fontWeight={600}>Subscribe</Typography>
        <Typography variant="body2">Get the latest updates and offers directly in your inbox.</Typography>
        <Box position="relative" width={"100%"}>
          <TextField
            fullWidth
            placeholder="Your E-mail address..."
            size="small"
            variant="outlined"
            sx={{
              bgcolor: "transparent",
              "& .MuiOutlinedInput-root": {
                color: "white",
                borderColor: "white",
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
                borderRadius: "5px",
              },
              input: { color: "white" },
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              right: 4,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
            }}
          >
            <TelegramIcon />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}
