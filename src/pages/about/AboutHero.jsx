import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "../home/arrival/Image";

function AboutHero() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      gap={{ xs: 3, md: 5 }}
      py={{ xs: 5, md: 10 }}
    >
      {/* النصوص */}
      <Box width={{ xs: "100%", md: "46%" }} display="flex" flexDirection="column" gap={3}>
        <Typography variant="h3" fontWeight={600} fontSize={{ xs: "2rem", md: "2.5rem" }}>
          Our Story
        </Typography>
        <Typography variant="body1" fontWeight={500} fontSize={{ xs: "0.9rem", md: "1rem" }}>
          Launched in 2015, Exclusive is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by a wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sellers and 300 brands and serves 3 million customers across
          the region.
        </Typography>
        <Typography variant="body1" fontWeight={500} fontSize={{ xs: "0.9rem", md: "1rem" }}>
          Exclusive has more than 1 Million products to offer, growing very fast. 
          Exclusive offers a diverse assortment in categories ranging from consumer.
        </Typography>
      </Box>

      {/* الصورة */}
      <Box width={{ xs: "100%", md: "54%" }} height={{ xs: "auto", md: "609px" }}>
        <Image
          width="100%"
          height="100%"
          src="/public/images/fcc89aaa7b85f8c1dcce81e71e2eb178be13bd4d.jpg"
          alt="About-hero"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
}

export default AboutHero;
