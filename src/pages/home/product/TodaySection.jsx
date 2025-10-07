import ProductSection from "./ProductSection";
import ProductGrid from "./ProductGrid";
import ColorBadge from "./Badge";
import ProductActions from "./ProductActions";
import { sectionOneProducts } from "../../../components/data/data";
import TimerDisplay from "./TimerDisplay";
import { Rating, Typography, Box } from "@mui/material";
import ProductPrice from "./ProductPrice";

export default function TodaySection() {
  return (
    <ProductSection
      title="Today’s"
      headerContent={<TimerDisplay />}
      header="Flash Sales"
      showHr={true}
    >
      <ProductGrid
        products={sectionOneProducts}
        columns={4.3}
        peekHalf={true}
        wrap={false}
        renderSlots={(product) => ({
          // الأكشنز (wishlist + view)
          actionsSlot: <ProductActions />,

          // الخصم (Badge أحمر)
          childrenSlot: (
            <Box mt={0.5}>
              <ColorBadge value={`${product.discount}%`} color="red" />
            </Box>
          ),
          priceSlot: (
            <ProductPrice
              price={product.originalPrice}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
          ),
          // الريتنج
          ratingSlot: (
            <Box mt={1} display="flex" alignItems="center" gap={0.5}>
              <Rating
                name="read-only"
                value={product.rating}
                readOnly
                size="small"
              />
              <Typography variant="body2" color="text.secondary">
                ({product.ratingCount})
              </Typography>
            </Box>
          ),
        })}
      />
    </ProductSection>
  );
}
