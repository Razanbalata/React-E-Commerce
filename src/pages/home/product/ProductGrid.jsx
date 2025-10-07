import BaseCard from "./BaseCard";
import { Box } from "@mui/material";

export default function ProductGrid({
  products,
  columns = 4,
  peekHalf = false,
  wrap = true,
  variant,
  renderSlots, // دالة ترجع object لكل كارد: { actionsSlot, priceSlot, ratingSlot, childrenSlot }
}) {
  return (
    <Box
      sx={{
        overflowX: "auto",
        width: "100%",
        pb: 1,
        scrollSnapType: peekHalf || wrap ? "mandatory" : "none",
        "&::-webkit-scrollbar": { display: "none" },
        margin: "0 auto",
        minWidth: {
          xs: peekHalf ? "600px" : "500px",
          sm: peekHalf ? "900px" : "700px",
          md: peekHalf ? "1100px" : "900px",
          lg: peekHalf ? "1308px" : "1170px",
          xl: peekHalf ? "1308px" : "1170px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: { xs: "nowrap", lg: wrap ? "wrap" : "nowrap" },
          justifyContent: "flex-start",
        }}
      >
        {products.map((product, idx) => {
          const isPeek = peekHalf && idx === columns;
          const flexWidth = columns === 4 ? "23.9%" : "22%";

          const slots = renderSlots ? renderSlots(product) : {};

          return (
            <Box
              key={product.id || idx}
              sx={{
                flex: isPeek ? "0 0 20%" : `0 0 ${flexWidth}`,
                flexShrink: "0",
              }}
            >
              <BaseCard
                product={product}
                variant={variant}
                actionsSlot={slots.actionsSlot}
                priceSlot={slots.priceSlot}
                ratingSlot={slots.ratingSlot}
                childrenSlot={slots.childrenSlot}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
