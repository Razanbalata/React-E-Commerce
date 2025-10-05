import React from "react";
import { Box, Container } from "@mui/material";

const Dashboard = ({
  children,
  width = "80%",
  padding = { x: 4, y: 4 },
  pb = 0,
}) => (
  <Box
    maxWidth="lg"
    width={{
      sm: width == "80%" ? "84%" : "100%",
      md: width === "80%" ? "87%" : "100%",
      lg: width,
    }}
    pt={padding.y}
    pb={pb}
    pl={{ sx: 0, sm: 2, md: 0, lg: padding.x }}
    flexDirection={{ xs: "column", md: "row" }}
    mx={{ xs: 0, md: "0", lg: "auto" }}
  >
    <Box
      position="relative"
      height="100%"
      bgcolor={{ xs: width == "80" ? "transparent" : "black", sm: "black" }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width={{
        sm: width == "80%" ? "79%" : "98%",
        md: width == "80%" ? "89%" : "98%",
        lg: "100%",
      }}
      margin={{ xs: "0", sm: "0", md: "auto", lg: "0" }}
    >
      {children}
    </Box>
  </Box>
);

export default Dashboard;

/*





import React from "react";
import { Box } from "@mui/material";



*/
