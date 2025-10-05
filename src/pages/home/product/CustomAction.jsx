import React from "react";
import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowButton from "./ArrowIcons";
import ButtonCom from "../../../components/buttons/ButtonCom";

export default function CustomAction({ useIcon = true }) {
  return (
    <Box>
      {useIcon ? (
        <Box display={{xs:"none",sm:"flex"}}>
          <ArrowButton direction="left">
            <ArrowBackIcon />
          </ArrowButton>
          <ArrowButton direction="right">
            <ArrowForwardIcon />
          </ArrowButton>
        </Box>
      ) : (
        <ButtonCom value="View All" />
      )}
    </Box>
  );
}
