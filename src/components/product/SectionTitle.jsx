import RedBar from "../product/RedBar";
import { Box, Typography } from "@mui/material";

export default function SectionTitle({ text }) {
  return (
    <Box display="flex" alignItems="center" my={2}>
      <RedBar />
      <Box ml={2}>
        <Typography color="red" fontWeight="bold" fontSize="14px">{text}</Typography>
      </Box>
    </Box>
  );
}
