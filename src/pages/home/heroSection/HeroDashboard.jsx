import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Dashboard from "./Dashboard";
import TextCom from "./TextCom";
import Pagination from "./Pagination";
import Image from "../arrival/Image";
import { ChevronRight } from "@mui/icons-material";
import TimerDisplay from "../product/TimerDisplay";

const HeroDashboard = () => {
  const images = [
    "/images/headerImage/dc40ba897215f42e5883a64157f0aa3a4d1a866a.jpg",
    "/images/headerImage/images (4).jpg",
    "/images/headerImage/images.jpg",
    "/images/headerImage/images (2).jpg",
    "/images/headerImage/images (3).jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];

  return (
    <Dashboard width="80%" padding={{ x: 4, y: 4 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent={{ xs: "center", sm: "space-between" }}
        position="relative"
        sx={{
          width: "100%",
          height: { xs: "55vw", sm: "400px" }, // الجوال: 55% من عرض الشاشة، الديسكتوب: 400px
          maxHeight: { xs: "350px", sm: "400px" },
          borderRadius: { xs: 2, sm: 0 },
          overflow: "hidden",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: { xs: "#fff", sm: "inherit" },
        }}
      >
        {/* Gradient overlay للجوال */}
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.1))",
            zIndex: 1,
          }}
        />

        {/* النص */}
        <Box
          width={{ xs: "100%", sm: "50%" }}
          textAlign="left"
          zIndex={2}
          sx={{
            position: "relative",
            px: { xs: 3, sm: 0 },
            transition: "all 0.5s ease",
            opacity: 0,
            animation: "fadeSlide 0.8s forwards",
            "@keyframes fadeSlide": {
              from: { opacity: 0, transform: "translateY(10%)" },
              to: { opacity: 1, transform: "translateY(0%)" },
            },
          }}
        >
          <TextCom
            width="100%"
            type="h2"
            title="iPhone 14 Series"
            text="Up to 10% off Voucher"
            showIcon
            paddLeft={8}
            size={52}
          >
            <Box display={{ xs: "flex", sm: "none" }}>
              <TimerDisplay variant="circle" justify="flex-start" />
            </Box>
            <Typography
              component="a"
              href="#"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                mt: 1.5,
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#ff6600",
                  transform: "translateX(5px)",
                },
              }}
            >
              Shop Now <ChevronRight sx={{ ml: 0.5 }} />
            </Typography>
          </TextCom>
        </Box>

        {/* الصورة (تظهر فقط من sm وفوق) */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { sm: "50%" },
            height: "75%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000", // ← خلفية سوداء
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <Image
            width="100%"
            height="100%"
            src={currentImage}
            alt={`Banner ${currentIndex + 1}`}
            sx={{
              objectFit: "contain",
              transition: "opacity 0.8s ease-in-out",
              opacity: 1,
            }}
          />
        </Box>
      </Box>

      <Pagination
        steps={images.length}
        activeStep={currentIndex}
        onDotClick={handleDotClick}
      />
    </Dashboard>
  );
};

export default HeroDashboard;
