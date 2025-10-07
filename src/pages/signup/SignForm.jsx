import { Google } from "@mui/icons-material";
import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Box
      width={{ xs: "100%", sm: "80%", md: "371px" }}
      height={{ md: "530px" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap={3}
    >
      <Box textAlign={{ xs: "center", md: "left" }}>
        <Typography
          variant="h4"
          fontWeight={600}
          mb={1}
          fontSize={{ xs: "1.8rem", md: "2rem" }}
        >
          Create an Account
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Enter your details below
        </Typography>
      </Box>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
        }}
      >
        {/* فقط بوردر سفلي */}
        <TextField
          name="name"
          value={formData.name}
          onChange={handleSubmit}
          label="Full Name"
          variant="standard"
          fullWidth
          InputProps={{
            disableUnderline: false,
          }}
        />
        <TextField
          name="email"
          value={formData.email}
          onChange={handleSubmit}
          label="Email Address"
          variant="standard"
          fullWidth
          type="email"
          InputProps={{
            disableUnderline: false,
          }}
        />
        <TextField
          name="password"
          value={formData.password}
          onChange={handleSubmit}
          label="Password"
          variant="standard"
          fullWidth
          type="password"
          InputProps={{
            disableUnderline: false,
          }}
        />

        {/* زر إنشاء الحساب */}
        <Box width="100%">
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#DB4444",
              fontWeight: "bold",
              py: 1.3,
              "&:hover": { backgroundColor: "#C33D3D" },
            }}
          >
            Create Account
          </Button>
        </Box>

        {/* زر جوجل */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={
            <Google
              sx={{
                color: "#DB4437",
              }}
            />
          }
          sx={{
            textTransform: "none",
            color: "#000",
            borderColor: "#ddd",
            py: 1.2,
            "&:hover": {
              borderColor: "#bbb",
              backgroundColor: "#fafafa",
            },
          }}
        >
          Sign up with Google
        </Button>

        <Typography variant="body2" textAlign="center">
          Already have an account?
          <Link
            to="/login"
            style={{ textDecoration: "underline", color: "#1976d2" }}
          >
            Log in
          </Link>
        </Typography>
      </form>
    </Box>
  );
}

export default SignForm;
