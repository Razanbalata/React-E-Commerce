import React from "react";
import { Box, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";

const TextCom = ({
  type = "h5",
  size,
  title,
  text,
  width = "50%",
  showIcon = true,
  children,
}) => (
  <Box
    color={"white"}
    width={width}
    display="flex"
    flexDirection="column"
    p={{xs:1,sm:5}}
    gap={1}
    zIndex={1}
    position={"relative"}
  >
    {title && (
      <Box display="flex" alignItems="center">
        {showIcon && <AppleIcon sx={{ fontSize: 50, mr: 1 }} />}
        <Typography variant="body2">{title}</Typography>
      </Box>
    )}
    {text && (
      <Typography
        variant={type}
        fontSize={{ xs: "2.5rem",sm:"2.2rem",md:size || "3rem",lg: size || "50 !important" }}
        fontWeight={500}
        lineHeight={1.2}
        width={{xs:"89%",sm:"100%"}}
      >
        {text}
      </Typography>
    )}
    {children && <Box>{children}</Box>}
    {/* أي عناصر إضافية مثل زر Shop Now أو Timer */}
  </Box>
);

export default TextCom;


