import React from "react";
import Dashboard from "../heroSection/Dashboard";
import { Box, Typography } from "@mui/material";
import TextCom from "../heroSection/TextCom";
import Image from "../arrival/Image";
import TimerDisplay from "../product/TimerDisplay";
import ButtonCom from "../../../components/buttons/ButtonCom";

function CategoriesDashboard() {
  return (
    <Dashboard padding={{ x: 0, y: 10 }} pb={4} width="100%">
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        position="relative"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            top: { xs: "26%", sm: "0" },
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
            type="h3"
            title="Categories"
            text="Enhance Your Music Experience"
            showIcon={false}
            size={{ xs: 20, sm: 30, lg: 50 }} // حجم أصغر على الجوال
          >
            <TimerDisplay justify="flex-start" variant="circle" />
            <Box sx={{ paddingTop: "30px" }}>
              <ButtonCom
                value="Shop Now"
                bg="#00FF66"
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                  },
                }}
              />
            </Box>
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
            src="/images/headerImage/3cc943ca7e210f637fc0504b7d93cd207df744c2.png"
            alt="Banner 2"
            trans={true}
          />
        </Box>
      </Box>
    </Dashboard>
  );
}

export default CategoriesDashboard;
