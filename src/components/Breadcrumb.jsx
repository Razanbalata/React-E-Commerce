import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Breadcrumb = ({ path = ["Home", "Contact"] }) => {
  return (
    <Box
      display="flex"
      gap={1}
      mb={2}
      px={{ xs: 2, sm: 2, md: 6,lg:0 }} // البادينغ يمين ويسار responsive
    >
      {path.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx !== 0 && <Typography>/</Typography>}
          {idx < path.length - 1 ? (
            <Link href="#" underline="hover" color="#000">
              {item}
            </Link>
          ) : (
            <Typography fontWeight="bold">{item}</Typography>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Breadcrumb;
