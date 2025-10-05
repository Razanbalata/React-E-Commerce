import React from "react";
import { Box } from "@mui/material";
import CategoryCard from "./CategoryCard";

// استدعاء الأيقونات
import Phone from "../../../components/icons/Phone";
import Computer from "../../../components/icons/Computer";
import SmartWatch from "../../../components/icons/SmartWatch";
import Camera from "../../../components/icons/Camera";
import HeadFones from "../../../components/icons/HeadFones";
import GamingIcon from "../../../components/icons/GamingIcon";

const categories = [
  { id: 1, name: "Phones", icon: Phone },
  { id: 2, name: "Computer", icon: Computer },
  { id: 3, name: "SmartWatch", icon: SmartWatch },
  { id: 4, name: "Camera", icon: Camera },
  { id: 5, name: "HeadFones", icon: HeadFones },
  { id: 6, name: "Gaming", icon: GamingIcon },
];

export default function CategoriesRow() {
  return (
    <Box
      bgcolor="white"
      px={{ xs: 0 }}
      py={4}
      maxWidth={"1170px"}
      overflow={{ xs: "auto", lg: "visible" }}
      
      sx={{
       scrollSnapType : "mandatory" ,
       "&::-webkit-scrollbar": { display: "none" }
      }}
    
    >
      <Box display="flex" justifyContent="space-between" gap={3}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            Icon={category.icon}
          />
        ))}
      </Box>
    </Box>
  );
}
