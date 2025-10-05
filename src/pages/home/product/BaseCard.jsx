import React from "react";
import { Card, CardContent, Box, Typography, Rating } from "@mui/material";
import ProductImage from "./ProductImage";
import ProductActions from "./ProductActions";
import ProductPrice from "./ProductPrice";

export default function BaseCard({ product, children, variant = "default" }) {
  return (
    <Card
      sx={{
        position: "relative",
        cursor: "pointer",
        minWidth: 258, 
        flexShrink: 0,
        height:"100%" 
      }}
    >
      <ProductActions />
      <ProductImage src={product.imageSrc} alt={product.imageAlt} />

      <CardContent
        sx={{
          "&:last-child": {
            paddingBottom: 2, 
          },
        }}
      >
        <Typography
          variant="subtitle1"
          component="a"
          sx={{ textDecoration: "none", color: "text.primary", mb: 1 }}
        >
          {product.name}
        </Typography>

        <Box
          width="100%"
          display="flex"
          flexDirection={variant === "inline" ? "row" : "column"}
          justifyContent="flex-start"
          alignItems={variant === "inline" ? "center" : "flex-start"}
          mb={1}
        >
          <Box flex={variant === "inline" ? "0 0 auto" : "none"}>
            <ProductPrice
              price={product.originalPrice}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
          </Box>
          <Box
            flex={variant === "inline" ? "0 0 auto" : "none"}
            mt={variant === "inline" ? 0 : 0.5}
          >
            <Box display="flex" alignItems="center" gap={0.5}>
              <Rating name="read-only" value={product.rating} readOnly />
              <Typography variant="body2" color="text.secondary">
                ({product.ratingCount})
              </Typography>
            </Box>
          </Box>
        </Box>

        {children}
      </CardContent>
    </Card>
  );
}
