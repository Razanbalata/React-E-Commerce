// templates/Footer.jsx
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import SubscribeColumn from "./SubscribeColumn";
import DownloadApp from "./DownloadApp";
import SupportColumn from "./SupportColumn";
import AccountColumn from "./AccountColumn";
import QuickLinksColumn from "./QuickLinksColumn";

export default function Footer() {
  return (
    <Box bgcolor="black" color="white" pt={6} px={{xs:0,sm:4,lg:4}} pb={3} overflow={"hidden"}>
      <Container maxWidth="lg">
        <Grid
          container
          display={"flex"}
          spacing={{ xs: 3, sm: 3, md: 2 }}
          justifyContent={{xs:"flex-start",lg:"space-between"}}
          flexWrap={{xs:"wrap",md:"nowrap",lg:"nowrap"}}
        >
          <Grid item xs={6} sm={4} lg={2.4}>
            <SubscribeColumn />
          </Grid>
          <Grid item xs={6} sm={4} lg={2.4}>
            <SupportColumn />
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <AccountColumn />
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <QuickLinksColumn />
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <DownloadApp />
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box
          mt={6}
          pt={2}
          borderTop="1px solid rgba(255,255,255,0.1)"
          textAlign="center"
          fontSize={14}
        >
          &copy; 2025 Your Company. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
}
