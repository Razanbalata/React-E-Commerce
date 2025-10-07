import React from "react";
import { Box, Typography } from "@mui/material";
import Dashboard from "./Dashboard";
import TextCom from "./TextCom";
import Pagination from "./Pagination";
import Image from "../arrival/Image";
import { ChevronRight } from "@mui/icons-material";
import TimerDisplay from "../product/TimerDisplay";

const HeroDashboard = () => (
  <Dashboard width="80%" padding={{ x: 4, y: 4 }}>
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent={{xs:"center",sm:"space-between"}}
      position="relative"
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: { xs: "#fff", sm: "inherit" },
        height: { xs: "85vw", sm: "auto" },
        borderRadius: { xs: 2, sm: 0 },
        overflow: "hidden",
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
          background: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.1))",
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
          top: { xs: "0%", sm: "0" },
          transform: { xs: "translateY(-20%)", sm: "none" },
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
          <Box display={{xs:"flex",sm:"none"}}>
            <TimerDisplay variant="circle" justify="flex-start"/>
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          width="90%"
          sx={{ boxShadow: "0 10px 30px rgba(0,0,0,0.2)", borderRadius: 2 }}
          src="/images/headerImage/dc40ba897215f42e5883a64157f0aa3a4d1a866a.jpg"
          alt="Banner 1"
        />
      </Box>
    </Box>

    <Pagination />
  </Dashboard>
);

export default HeroDashboard;
