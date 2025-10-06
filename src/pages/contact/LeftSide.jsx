import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

function LeftSide() {
  const iconStyle = {
    backgroundColor: "#DB4444",
    color: "#fff",
    width: 30,
    height: 30,
    padding: "5px",
    borderRadius: "50%",
  };
  const size ={ xs: "0.9rem", sm: "1rem", md: ".9rem",lg:"1.1rem" }

  return (
    <Box
      boxShadow="0 1px 13px 0 rgba(0,0,0,0.05)"
      borderRadius="4px"
      bgcolor="#fff"
      width={{ xs: "100%", md: "33%" }}
      px={{ xs: 3, md: 5 }}
      py={{ xs: 4, md: 6 }}
      height={"457px"}
    >
      {/* Call Section */}
      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" alignItems="center" gap={1.5}>
          <CallRoundedIcon sx={iconStyle} />
          <Typography fontWeight="bold" fontSize={{ xs: "1rem", md: "1.1rem" }}>
            Call To Us
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography color="text.secondary">
            We are available 24/7, 7 days a week.
          </Typography>
          <Typography color="text.primary">Phone: +8801611112222</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Email Section */}
      <Box display="flex" flexDirection="column" gap={3}>
        <Box display="flex" alignItems="center" gap={1.5}>
          <MailOutlineOutlinedIcon sx={iconStyle} />
          <Typography fontWeight="bold" fontSize={{ xs: "1rem", md: "1.1rem" }}>
            Write To Us
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography color="text.secondary" >
            Fill out our form and we will contact you within 24 hours.
          </Typography>
          <Typography color="text.primary" fontSize={size}>
            Emails: customer@exclusive.com
          </Typography>
          <Typography color="text.primary" fontSize={size}>
            Emails: support@exclusive.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LeftSide;
