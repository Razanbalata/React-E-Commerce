import { Box } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ServiceCard from "./ServiceCard";

export default function FullServices() {
  const services = [
    {
      title: "Fast Delivery",
      desc: "Get your products delivered quickly and safely.",
      Icon: LocalShippingIcon,
    },
    {
      title: "24/7 Support",
      desc: "We are always here to help you anytime.",
      Icon: HeadsetMicIcon,
    },
    {
      title: "Best Quality",
      desc: "Top-quality products with guaranteed satisfaction.",
      Icon: WorkspacePremiumIcon,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr", 
          sm: "1fr", 
          md: "1fr 1fr 1fr", 
        },
        gap: 4,
        py: 10,
        justifyItems: "center", 
      }}
    >
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </Box>
  );
}
