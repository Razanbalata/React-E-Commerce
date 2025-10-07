import { Box, Typography } from "@mui/material";

export default function ServiceCard({ title, desc, Icon, bordered = false }) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        p: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: bordered ? "1px solid #e0e0e0" : "none",
        textAlign: "center",
        gap: 2,
        width: { xs: "50%", md: "100%" },
        transition: "0.3s",
        "&:hover": {
          boxShadow: !bordered ? 5 : "none",
          transform: "translateY(-5px)",
          backgroundColor: bordered ? "rgba(219, 68, 68, 1)" : "#fff",
          color: bordered ? "#fff" : "#000",
        },
        // 🔹 تغيير لون الأيقونة عند hover على الكارد
        "&:hover .service-icon": {
          backgroundColor: bordered ? "#fff" : "#000",
          color: bordered ? "#000" : "#fff",
        },
        "&:hover .service-box":{
          backgroundColor: bordered ? "rgba(255,255,255,.5)" : "#808080a6",
        }
      }}
    >
      <Box
       className="service-box"
        sx={{
          backgroundColor: "#808080a6",
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          lineHeight: "4.5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          className="service-icon"
          sx={{
            fontSize: 40,
            color: "#fff",
            backgroundColor: "#000",
            borderRadius: "50%",
            padding: "10px",
            transition: "0.3s",
          }}
        />
      </Box>

      <Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="inherit">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
