import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

function TimerDisplay({ justify = "center", variant = "default" }) {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // يوم كامل بالثواني

  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  const days = String(Math.floor(timeLeft / (3600 * 24))).padStart(2, "0");
  const hours = String(Math.floor((timeLeft % (3600 * 24)) / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  // Component لكل وحدة
  const TimerUnit = ({ label, value }) => {
    if (variant === "circle") {
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bgcolor="white"
          borderRadius="50%"
          color="#000"
          width={70}
          height={70}
          gap={0.2}
        >
          <Typography variant="h6" fontWeight="bold">
            {value}
          </Typography>
          <Typography variant="caption" fontWeight={"bold"}>{label}</Typography>
        </Box>
      );
    }

    // الوضع العادي (القديم)
    return (
      <Box display={{xs:"none",lg:"flex"}} flexDirection="column" textAlign="center">
        <Typography variant="caption">{label}</Typography>
        <Typography variant="h6" fontWeight="bold">
          {value}
        </Typography>
      </Box>
    );
  };

  return (
    <Box display={{xs:"none",lg:"flex"}} justifyContent={justify} alignItems="flex-end" gap={variant === "circle" ? 2 : 0.5}>
      <TimerUnit label="Days" value={days} />
      {variant !== "circle" && <Typography variant="h6" color="red">:</Typography>}
      <TimerUnit label="Hours" value={hours} />
      {variant !== "circle" && <Typography variant="h6" color="red">:</Typography>}
      <TimerUnit label="Minutes" value={minutes} />
      {variant !== "circle" && <Typography variant="h6" color="red">:</Typography>}
      <TimerUnit label="Seconds" value={seconds} />
    </Box>
  );
}

export default TimerDisplay;
