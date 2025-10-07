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
  const hours = String(Math.floor((timeLeft % (3600 * 24)) / 3600)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

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
          width={{ xs: 50, sm: 70 }}
          height={{ xs: 50, sm: 70 }}
          gap={"6px"}
          p={1}
          boxShadow="0 0 8px rgba(0,0,0,0.1)"
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            fontSize={{ xs: "0.9rem", sm: "1.1rem" }}
          >
            {value}
          </Typography>
          <Typography
            variant="caption"
            fontWeight="bold"
            fontSize={{ xs: "0.6rem", sm: "0.75rem" }}
          >
            {label}
          </Typography>
        </Box>
      );
    }

    // الوضع العادي (النصوص)
    return (
      <Box flexDirection="column" textAlign="center">
        <Typography variant="caption" fontSize={{ xs: "0.7rem", sm: "0.8rem" }}>
          {label}
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          fontSize={{ xs: "1rem", sm: "1.2rem" }}
        >
          {value}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      display="flex"
      justifyContent={justify}
      alignItems="flex-end"
      gap={variant === "circle" ? { xs: 1, sm: 1 } : 0.5}
      flexWrap="nowrap"
      p={{ xs: 0, sm: 1 }}
    >
      <TimerUnit label="Days" value={days} />
      {variant !== "circle" && (
        <Typography variant="h6" color="red" mx={0.5}>
          :
        </Typography>
      )}
      <TimerUnit label="Hours" value={hours} />
      {variant !== "circle" && (
        <Typography variant="h6" color="red" mx={0.5}>
          :
        </Typography>
      )}
      <TimerUnit label="Minutes" value={minutes} />
      {variant !== "circle" && (
        <Typography variant="h6" color="red" mx={0.5}>
          :
        </Typography>
      )}
      <TimerUnit label="Seconds" value={seconds} />
    </Box>
  );
}

export default TimerDisplay;
