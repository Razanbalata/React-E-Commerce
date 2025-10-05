import { Box, Typography } from "@mui/material";

export default function ServiceCard({ title, desc, Icon }) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        p: 3,
        borderRadius: 2,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        textAlign:"center",
        gap:2,
        width: {xs:"50%",md:"100%"},
        transition: "0.3s",
        "&:hover": { boxShadow: 5, transform: "translateY(-5px)" },
      }}
    >
      <Box sx={{backgroundColor:"#808080a6",borderRadius:"50%",width:"70px",height:"70px",lineHeight:"4.5"}}>
        <Icon sx={{ fontSize: 50, color:"#fff", mb: 1,backgroundColor:"#000",borderRadius:"50%",padding:"10px" }}/>
      </Box>

      <Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
      </Box>
    </Box>
  );
}
