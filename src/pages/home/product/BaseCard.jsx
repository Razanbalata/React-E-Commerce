import React, { useContext } from "react";
import { Card, CardContent, Box, Typography, Button } from "@mui/material";
import ProductImage from "./ProductImage";
import CartIcon from "../../../components/icons/CartIcon";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { ProductsContext } from "../../../contexts/ProductsContext";
import toast from "react-hot-toast";

export default function BaseCard({
  product,
  actionsSlot, // الأكشنز فوق
  priceSlot, // السعر الإضافي أو الخصم
  ratingSlot, // الريتنج
  childrenSlot, // أي محتوى إضافي (مثل البادج)
  showAddToCartAlways = false, // 👈 جديد
}) {
   const { addToCart } = useContext(GlobalContext);
  return (
    <Card
      sx={{
        position: "relative",
        height: "322px",
        minWidth: 258,
        flexShrink: 0,
        overflow: "visible",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover .addToCart": {
          opacity: 1,
          transform: "translateY(0)",
        },
      }}
    >
      {/* الصورة */}
      <Box sx={{ position: "relative" }}>
        <ProductImage src={product.images} alt={product.imageAlt} />

        {/* زر Add to Cart */}
        <Box
          className="addToCart"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "#000",
            color: "#fff",
            textAlign: "center",
            py: 1,
            opacity: showAddToCartAlways ? 1 : 0,
            transform: showAddToCartAlways
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "all 0.3s ease",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "white",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
            onClick={()=>{
              console.log(product)
              addToCart(product)
              toast.success(`${product.title} added to cart!`);
            }}
          >
            <ShoppingCart /> Add To Cart
          </Button>
        </Box>
      </Box>

      {/* الأكشنز */}
      {actionsSlot && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {actionsSlot}
        </Box>
      )}

      <Link to={`/productDetails/${product.id}`}>
        <CardContent sx={{ "&:last-child": { paddingBottom: 2 } }}>
          {/* العنوان */}
          <Typography variant="subtitle1" fontSize={".9rem"} sx={{ mb: 1 }}>
            {product.title}
          </Typography>

          {/* السعر */}
          {priceSlot && <Box mt={0.5}>{priceSlot}</Box>}

          {/* الريتنج */}
          {ratingSlot && <Box mt={1}>{ratingSlot}</Box>}

          {/* أي محتوى إضافي */}
          {childrenSlot && <Box>{childrenSlot}</Box>}
        </CardContent>
      </Link>
    </Card>
  );
}
