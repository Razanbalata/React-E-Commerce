import { Box } from "@mui/material";

export default function ColorBadge({ value, color = "red" }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: color,
        color: "#fff",
        padding: "3px 10px",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "400",
      }}
    >
      {value}
    </Box>
  );
}
