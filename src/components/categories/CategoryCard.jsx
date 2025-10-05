import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CategoryIcon from "../categories/CategoryIcon";

export default function CategoryCard({ name, Icon }) {
  return (
    <Card
      sx={{
        minWidth: "170px",
        borderRadius: 1,
        border: "2px solid #ccc",
        overflow: "hidden",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 20px",
        flex: "0 0 15%",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#DB4444",
          color: "#fff",
          borderColor: "transparent",
        },
        "&:hover .MuiTypography-root, &:hover svg": {
          color: "#fff",
          transition: "0.3s",
        },
      }}
    >
      <CategoryIcon Icon={Icon} />
      <CardContent sx={{ py: 1 }}>
        <Typography variant="h6" fontWeight="medium" textAlign="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
