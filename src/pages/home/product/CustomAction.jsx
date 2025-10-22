import React from "react";
import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowButton from "./ArrowIcons";
import ButtonCom from "../../../components/buttons/ButtonCom";

export default function CustomAction({ useIcon = true,onPrev,onNext }) {
  return (
    <Box>
      {useIcon ? (
        <Box display={{ xs: "none", sm: "flex" }}>
          <Box onClick={onPrev}>
            <ArrowButton direction="left">
              <ArrowBackIcon />
            </ArrowButton>
          </Box>
          <Box onClick={onNext}>
            <ArrowButton direction="right">
            <ArrowForwardIcon />
          </ArrowButton>
          </Box>
        </Box>
      ) : (
        <ButtonCom value="View All" />
      )}
    </Box>
  );
}
