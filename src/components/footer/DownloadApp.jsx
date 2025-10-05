import React from "react";
import { Stack, IconButton, Box,Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function DownloadApp() {
  return (
    <Stack direction="column" spacing={2} flex="1" minWidth={220} px={{xs:0,sm:3}}>
      <Typography variant="subtitle1" fontWeight={600}>
        Download App
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center", 
          width: "100%",
          maxWidth: 250,
          height: 80,
        }}
      >
        {/* QR Code */}
        <Box sx={{ flex: "0 0 80px" }}>
          <img
            src="/images/footerImages/991387c05dd6d44594e01b675513068803e2426d.jpg"
            alt="QR Code"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 2,
              border: "1px solid #fff",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1.5, 
            justifyContent: "center",
          }}
        >
          {[
            "/images/footerImages/a61d4c7110b18ab55a1e1a07ebf54a46ebb07284.png",
            "/images/footerImages/38932d5accb54c528f9bcf326ca48ea29bd6d890.png",
          ].map((src, i) => (
            <Box key={i} sx={{ flex: 1 }}>
              <img
                src={src}
                alt={`App ${i}`}
                style={{
                  width: "115px",
                  height: "33px",
                  objectFit: "cover",
                  border:"1px solid #ddd",
                  borderRadius: 6,

                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Stack direction="row" spacing={1}>
        {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map(
          (Icon, i) => (
            <IconButton key={i} sx={{ color: "white", p: 0 }}>
              <Icon />
            </IconButton>
          )
        )}
      </Stack>
    </Stack>
  );
}
