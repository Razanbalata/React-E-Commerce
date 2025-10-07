import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import ProductImage from "./ProductImage";

export default function BaseCard({
  product,
  actionsSlot,   // الأكشنز فوق
  priceSlot,     // السعر الإضافي أو الخصم
  ratingSlot,    // الريتنج
  childrenSlot,  // أي محتوى إضافي (مثل البادج)
}) {
  return (
    <Card sx={{ position: "relative",height:"322px", minWidth: 258, flexShrink: 0, overflow: "visible" }}>
      <ProductImage src={product.imageSrc} alt={product.imageAlt} />

      {/* الأكشنز */}
      {actionsSlot && (
        <Box sx={{ position: "absolute", top: 8, right: 8, display: "flex", flexDirection: "column", gap: 1 }}>
          {actionsSlot}
        </Box>
      )}

      <CardContent sx={{ "&:last-child": { paddingBottom: 2 } }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>{product.name}</Typography>

        {/* السعر العادي */}
        {/* {product.originalPrice && (
          <Typography variant="body1" sx={{ fontWeight: 600 }}>${product.originalPrice}</Typography>
        )} */}

        {/* السعر الإضافي / الخصم */}
        {priceSlot && <Box mt={0.5}>{priceSlot}</Box>}

        {/* الريتنج */}
        {ratingSlot && <Box mt={1}>{ratingSlot}</Box>}

        {/* أي محتوى إضافي */}
        {childrenSlot && <Box>{childrenSlot}</Box>}
      </CardContent>
    </Card>
  );
}

