import {
  Box,
  Typography,
  Button,
  CardMedia,
  IconButton,
  Rating,
  Divider,
} from "@mui/material";
import { useContext, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Autorenew } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function Details() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <Typography>Loading product details...</Typography>;

  // الصور: إذا كانت أقل من 4، نكرر أول صورة حتى نكمل 4
  const productImages = product.images || [product.thumbnail];
  const images = Array.from({ length: 4 }, (_, i) => productImages[i] || productImages[0]);

  const [mainImage, setMainImage] = useState(images[0]);
  const colors = product.colors || ["red", "blue", "green"];
  const sizes = product.sizes || ["XS", "S", "M", "L", "XL"];
  const [selected, setSelected] = useState(sizes[0]);
  const [count, setCount] = useState(1);
  
   console.log(product) 

  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={{ xs: 3, md: 4 }} p={{ xs: 2, md: 4 }}>
      {/* صور المنتج */}
      <Box display="flex" flexDirection="row" gap={2} flex={1} justifyContent="center">
        {/* الصور الجانبية */}
        <Box display="flex" flexDirection="column" gap={2} justifyContent="center">
          {images.map((img, i) => (
            <CardMedia
              key={i}
              component="img"
              src={img}
              sx={{
                width: { xs: 60, md: 170 },
                height: { xs: 60, md: 138 },
                cursor: "pointer",
                backgroundColor: "#f7f7f7",
                objectFit: "contain",
              }}
              onClick={() => setMainImage(img)}
            />
          ))}
        </Box>

        {/* الصورة الرئيسية */}
        <Box width={{ xs: "100%", md: "500px" }} height={{ xs: 300, md: 600 }} flex={1}>
          <CardMedia
            component="img"
            src={mainImage}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#f7f7f7",
            }}
          />
        </Box>
      </Box>

      {/* تفاصيل المنتج */}
      <Box display="flex" flexDirection="column" gap={2} flex={{ xs: 1, md: 0.5 }}>
        <Typography variant="h5" fontWeight="bold">{product.title}</Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <Rating value={product.rating || 0} precision={0.5} readOnly />
          <Typography variant="body2">({product.stock || 0} reviews)</Typography>
        </Box>

        <Typography variant="h6" color="primary">${product.price}</Typography>
        <Typography variant="body2">{product.description}</Typography>

        <Divider sx={{ margin: "10px 0" }} />

        {/* الألوان */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography>Colors:</Typography>
          {colors.map((color, i) => (
            <Box key={i} sx={{ width: 20, height: 20, bgcolor: color, borderRadius: "50%", cursor: "pointer", border: "1px solid #ccc" }} />
          ))}
        </Box>

        {/* المقاسات */}
        <Box display="flex" gap={1} flexWrap="wrap">
          <Typography>Sizes:</Typography>
          {sizes.map((size) => (
            <Button
              key={size}
              onClick={() => setSelected(size)}
              sx={{
                minWidth: 30,
                padding: "4px 8px",
                fontSize: 12,
                border: selected === size ? 0 : "1px solid #000",
                backgroundColor: selected === size ? "#DB4444" : "transparent",
                color: selected === size ? "white" : "black",
                "&:hover": {
                  backgroundColor: selected === size ? "black" : "#f0f0f0",
                },
              }}
            >
              {size}
            </Button>
          ))}
        </Box>

        {/* الكمية + زر الشراء */}
        <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
          <Box display="flex" alignItems="center" border="1px solid #ccc" borderRadius={1}>
            <Button sx={{ borderRight: "1px solid #ccc", minWidth: 30, borderRadius: 0 }} onClick={() => count > 1 && setCount(prev => prev - 1)}>-</Button>
            <Typography mx={3}>{count}</Typography>
            <Button sx={{ borderLeft: "1px solid #ccc", minWidth: 30, borderRadius: 0 }} onClick={() => setCount(prev => prev + 1)}>+</Button>
          </Box>

          <Box display="flex" gap={1}>
            <Button variant="contained" sx={{ backgroundColor: "#DB4444" }}>Buy Now</Button>
            <IconButton><FavoriteBorderIcon /></IconButton>
          </Box>
        </Box>

        {/* معلومات التوصيل */}
        <Box display="flex" flexDirection="column" gap={2} p={2} border="1px solid #ccc" borderRadius={1}>
          <Box display="flex" alignItems="center" gap={2}>
            <LocalShippingIcon />
            <Box display="flex" flexDirection="column">
              <Typography variant="body2">Free Delivery</Typography>
              <Typography variant="caption">Enter your postal code for delivery availability</Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          <Box display="flex" alignItems="center" gap={1}>
            <Autorenew sx={{ fontSize: "30px" }} />
            <Box display="flex" flexDirection="column">
              <Typography variant="body2">Return Delivery</Typography>
              <Typography variant="caption">Returns: 30-day money-back guarantee</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
