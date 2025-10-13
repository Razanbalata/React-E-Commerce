import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Breadcrumb = ({ path = ["Home", "Contact"] }) => {
  return (
    <Box
      display="flex"
      gap={1}
      mb={2}
      px={{ xs: 1, sm: 2, md: 4,lg:3 }} // البادينغ يمين ويسار responsive
      flexWrap={"wrap"}
    >
      {path.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx !== 0 && <Typography>/</Typography>}
          {idx < path.length - 1 ? (
            <Link href="#" underline="hover" color="#000" flexShrink={0}>
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
