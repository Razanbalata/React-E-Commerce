import ProductSection from "../product/ProductSection";
import ProductGrid from "../product/ProductGrid";
import { sectionTwoProducts } from "../../../components/data/data";
import { Box, Rating, Typography } from "@mui/material";
import ProductPrice from "./ProductPrice";
import ProductActions from "./ProductActions";
export default function ThisMonthSection({showHead}) {
  return (
    <ProductSection
      title="This Month"
      header="Best Selling Products"
      useIcon={false}
      showButton={true}
      showFalshSale={showHead}
    >
      <ProductGrid
        products={sectionTwoProducts}
        columns={4}
        wrap
        renderSlots={(product) => ({
          // الأكشنز (wishlist + view)
          actionsSlot: <ProductActions />,

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
