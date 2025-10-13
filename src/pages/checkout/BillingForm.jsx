import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";

export default function BillingForm({ onSubmit }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("You must agree before checkout!");
      return;
    }
    onSubmit(form);
  };

  return (
    <Box
      sx={{
        p: 4,
        pl:3,
        borderRadius: 2,
        flex: 1,
      }}
    >
      <Typography variant="h5" sx={{ mb: 4, fontWeight: "bold" }}>
        Billing Details
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2.5, // جاب بين كل input والتاني
          maxWidth: 420,
        }}
      >
        {[
          { label: "Full Name", name: "fullName" },
          { label: "Email", name: "email", type: "email" },
          { label: "Address", name: "address" },
          { label: "City", name: "city" },
          { label: "State", name: "state" },
          { label: "Zip Code", name: "zip" },
          { label: "Phone Number", name: "phone" },
        ].map((field) => (
          <Box key={field.name}>
            <Typography
              variant="body2"
              sx={{ mb: 0.5, color: "text.secondary", fontWeight: 500 }}
            >
              {field.label}
            </Typography>
            <TextField
              name={field.name}
              type={field.type || "text"}
              value={form[field.name]}
              onChange={handleChange}
              fullWidth
              size="small"
              variant="standard"
              InputProps={{
                disableUnderline: true, // إلغاء الخط السفلي
                sx: {
                  backgroundColor: "#f7f7f7",
                  p:1
                },
              }}
            />
          </Box>
        ))}

        {/* Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              color="primary"
            />
          }
          label={
            <Typography variant="body2" color="text.secondary">
              I agree to the terms and conditions
            </Typography>
          }
        />
      </Box>
    </Box>
  );
}
