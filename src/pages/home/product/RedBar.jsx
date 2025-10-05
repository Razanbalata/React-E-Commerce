import { Box } from "@mui/material";
export default function RedBar({ width = 16, height = 33 }) {
  return <Box sx={{ width, height, bgcolor: "red", borderRadius: 1 }} />;
}