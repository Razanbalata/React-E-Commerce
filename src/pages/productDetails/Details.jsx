import {
  Box,
  Typography,
  Button,
  CardMedia,
  IconButton,
  Rating,
  Divider,
} from "@mui/material";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Autorenew } from "@mui/icons-material";

export default function Details() {
  const images = [
    "/public/images/faa80b609e3950aed9181acb44510f859f50d850.png",
    "/public/images/faa80b609e3950aed9181acb44510f859f50d850.png",
    "/public/images/faa80b609e3950aed9181acb44510f859f50d850.png",
    "/public/images/faa80b609e3950aed9181acb44510f859f50d850.png",
  ];
  const [mainImage, setMainImage] = useState(images[0]);
  const colors = ["red", "blue", "green"];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selected, setSelected] = useState("S");
  const [count, setCount] = useState(0);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      gap={{ xs: 3, md: 4 }}
      p={{ xs: 2, md: 4 }}
    >
      {/* صور المنتج */}
      <Box
        display="flex"
        flexDirection={{ xs: "row" }}
        gap={2}
        flex={1}
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column"}}
          gap={2}
          justifyContent="center"
        >
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
                objectFit: "contain"
              }}
              onClick={() => setMainImage(img)}
            />
          ))}
        </Box>
        <Box
          width={{ xs: "100%", md: "500px" }}
          height={{ xs: 300, md: 600 }}
          flex={1}
        >
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
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        flex={{ xs: 1, md: 0.5 }}
      >
        <Typography variant="h5" fontWeight="bold">
          Product Name
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <Rating value={4.5} precision={0.5} readOnly />
          <Typography variant="body2">(24 reviews)</Typography>
        </Box>

        <Typography variant="h6" color="primary">
          $99.99
        </Typography>

        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod,
          nisl vel tincidunt.
        </Typography>

        <Divider sx={{ margin: "10px 0" }} />

        {/* الألوان */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography>Colors:</Typography>
          {colors.map((color, i) => (
            <Box
              key={i}
              sx={{
                width: 20,
                height: 20,
                bgcolor: color,
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #ccc",
              }}
            />
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
                border: selected ? 0 : "1px solid #000",
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
        <Box
          display="flex"
          flexDirection={{ xs: "row", md: "row" }}
          alignItems="center"
          gap={2}
        >
          <Box display="flex" alignItems="center" border="1px solid #ccc" borderRadius={1}>
            <Button
              sx={{ borderRight: "1px solid #ccc", minWidth: 30, borderRadius: 0 }}
              onClick={() => count > 0 && setCount((prev) => prev - 1)}
            >
              -
            </Button>
            <Typography mx={3}>{count}</Typography>
            <Button
              sx={{ borderLeft: "1px solid #ccc", minWidth: 30, borderRadius: 0 }}
              onClick={() => setCount((prev) => prev + 1)}
            >
              +
            </Button>
          </Box>

          <Box display="flex" gap={1}>
            <Button variant="contained" sx={{ backgroundColor: "#DB4444" }}>
              Buy Now
            </Button>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
        </Box>

        {/* معلومات التوصيل */}
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          p={2}
          border="1px solid #ccc"
          borderRadius={1}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <LocalShippingIcon />
            <Box display="flex" flexDirection="column">
              <Typography variant="body2">Free Delivery</Typography>
              <Typography variant="caption">
                Enter your postal code for delivery availability
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          <Box display="flex" alignItems="center" gap={1}>
            <Autorenew sx={{ fontSize: "30px" }} />
            <Box display="flex" flexDirection="column">
              <Typography variant="body2">Return Delivery</Typography>
              <Typography variant="caption">
                Returns: 30-day money-back guarantee
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
