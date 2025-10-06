import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import ButtonCom from "../../components/buttons/ButtonCom";

function RightSide() {
  const inputStyle = {
    bgcolor: "#F5F5F5",
    borderRadius: "4px",
    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
    "& .MuiInputBase-input": { padding: "12px 14px" },
    "&:hover": { bgcolor: "#eaeaea" },
    "&.Mui-focused": {
      bgcolor: "#fff",
      boxShadow: "0 0 0 2px #DB4444",
    },
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message:""
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Box
      boxShadow="0 1px 13px 0 rgba(0,0,0,0.05)"
      borderRadius="4px"
      bgcolor="#fff"
      width={{ xs: "100%", md: "75%" }}
      px={{ xs: 3, md: 5 }}
      py={{ xs: 4, md: 6 }}
    >
      <form onSubmit={(e)=>{
        alert("sbmit")
        e.preventDefault()
        console.log(data)
      }}>
        {/* الحقول العلوية */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          gap={2}
          mb={3}
        >
          <TextField
            name="firstName"
            type="text"
            placeholder="Your Name"
            required
            fullWidth
            sx={inputStyle}
            value={data.firstName}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            type="text"
            placeholder="Your Last Name"
            required
            fullWidth
            sx={inputStyle}
            value={data.lastName}
            onChange={handleChange}
          />
          <TextField
            name="email"
            type="email"
            placeholder="Your Email"
            required
            fullWidth
            sx={inputStyle}
            value={data.email}
            onChange={handleChange}
          />
        </Box>

        {/* الرسالة */}
        <Box mb={3}>
          <TextField
          name="message"
            multiline
            rows={7}
            placeholder="Your Message"
            fullWidth
            sx={inputStyle}
            value={data.message}
            onChange={handleChange}
          />
        </Box>

        {/* الزر */}
        <Box  display="flex" justifyContent={{ xs: "center", md: "flex-end" }}>
          <ButtonCom  value="Send Message" showOnMobile />
        </Box>
      </form>
    </Box>
  );
}

export default RightSide;
