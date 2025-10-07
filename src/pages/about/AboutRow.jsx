import { Box } from "@mui/material";
import React from "react";
import AboutCard from "./AboutCard";

function AboutRow() {
  const aboutPeopleInfo = [
  {
    src: "/public/images/088149fd5afc043392ee3cbb529f429b3e2098d3.png",
    alt: "Tom Cruise",
    name: "Tom Cruise",
    job: "Founder & Chairman",
    zoom: 1, // طبيعي
  },
  {
    src: "/public/images/8438eab9a2fe88af0272adecd83422d0cb7e20d7.png",
    alt: "Emma Watson",
    name: "Emma Watson",
    job: "Managing Director",
    zoom: 1, // طبيعي
  },
  {
    src: "/public/images/ede48f2b5df8103b281240ce5bafe5dd7d215ab8.png",
    alt: "Will Smith",
    name: "Will Smith",
    job: "Product Designer",
    zoom: 1.5, // زووم أكبر
  },
];


  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={3}
      py={8}
      justifyContent="space-between"
    >
      {aboutPeopleInfo.map((person, idx) => (
        <AboutCard key={idx} person={person} />
      ))}
    </Box>
  );
}

export default AboutRow;
