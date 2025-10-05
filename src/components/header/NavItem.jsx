import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const NavItem = ({ title }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={60} 
      height={24} 
      sx={{
        cursor: "pointer",
        "&:hover .underline": {
          opacity: 1,
        },
        transition: "color 0.15s",
      }}
    >
      <Typography
        sx={{
          width: "100%",
          height: "100%",
          lineHeight: "24px",
          fontSize: "16px",
          fontWeight: 400,
          textAlign: "center",
          color: "gray.800",
          fontFamily: 'Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
          transition: "color 0.15s",
          "&:hover": {
            color: "black",
          },
        }}
      >
        {title}
      </Typography>

      <Box className="underline" mt={0.5} sx={{ opacity: 0, transition: "opacity 0.15s" }}>
        <Divider width={48} addMargin={false} />
      </Box>
    </Box>
  );
};

export default NavItem;
