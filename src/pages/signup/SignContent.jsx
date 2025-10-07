import {
  Box,
  CardMedia,
  TextField,
  Typography,
  Button,
  Link,
} from "@mui/material";
import React from "react";
import { Google } from "@mui/icons-material";
import SignForm from "./SignForm";

function SignContent({children}) {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      py={{ xs: 3, md: 5 }}
      px={{ xs: 2, md: 5,lg:0 }}
      gap={{ xs: 4, md: 8 }}
    >
      {/* الصورة */}
      <Box
        sx={{
          width: { xs: "100%", md: "805px" },
          height: { xs: "auto", md: "706px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          src="/public/images/75f394c0a1c7dc5b68a42239311e510f54d8cd59.jpg"
          alt="Sign Up Image"
          sx={{
            width: { xs: "100%", md: "919px" },
            height: { xs: "auto", md: "706px" },
            position: "relative",
            left: { xs: 0, md: "-160px" },
            objectFit: "cover",
          }}
        />
      </Box>

      {/* الفورم */}
      {children}
    </Box>
  );
}

export default SignContent;
