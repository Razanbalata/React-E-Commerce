import { Box } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ServiceCard from "./ServiceCard";

export default function FullServices({ services, sx = {} , bordered }) {
  const baseServices = [
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

  const finalServices = services || baseServices;

  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr",
          md: "repeat(auto-fit, minmax(250px, 1fr))",
        },
        gap: 4,
        py: 10,
        justifyItems: "center",
        ...sx,
      }}
    >
      {finalServices.map((service, index) => (
        <ServiceCard key={index} {...service} bordered={bordered}  />
      ))}
    </Box>
  );
}
