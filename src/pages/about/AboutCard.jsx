import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Stack,
  Box,
  CardMedia,
} from "@mui/material";
import React from "react";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";

function AboutCard({ person }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "45%", md: "30%" }, // responsive
        minWidth: 250,
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-5px)" },
         boxShadow:"none"
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: 250, sm: 300, md: 350 }, // responsive height
          position: "relative",
          bgcolor: "rgba(245,245,245,1)",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        <CardMedia
          component="img"
          image={person.src}
          alt={person.alt}
          sx={{
            width: "auto",
            height: "100%",
            objectFit: "contain",
            transform: `scale(${person.zoom || 1})`, // scale ثابت
            transformOrigin: "top center",
            px:2,
            pt:2,
            
          }}
        />
      </Box>

      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {person.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          {person.job}
        </Typography>
        <Stack direction="row" justifyContent="flex-start" spacing={1}>
          {[Instagram, Twitter, LinkedIn].map((Icon, i) => (
            <IconButton
              key={i}
              sx={{
                color: "#000",
                p: 0.5,
                transition: "0.3s",
                "&:hover": { color: "#DB4444" },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
