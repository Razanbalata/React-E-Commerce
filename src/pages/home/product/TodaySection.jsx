import ProductSection from "./ProductSection";
import ProductGrid from "./ProductGrid";
import ColorBadge from "./Badge";
import ProductActions from "./ProductActions";
import { sectionOneProducts } from "../../../components/data/data";
import TimerDisplay from "./TimerDisplay";
import { Rating, Typography, Box } from "@mui/material";
import ProductPrice from "./ProductPrice";
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";

export default function TodaySection() {
  const { products } = useContext(ProductsContext);

  return (
    <ProductSection
      title="Today’s"
      headerContent={<TimerDisplay />}
      header="Flash Sales"
      showHr={true}
    >
      <ProductGrid
        products={products.slice(0, 8)}
        columns={4.3}
        peekHalf={true}
        wrap={false}
        renderSlots={(product) => ({
          // الأكشنز (wishlist + view)
          actionsSlot: <ProductActions />,

          // الخصم (Badge أحمر)
          childrenSlot: (
            <Box mt={0.5}>
              <ColorBadge
                value={`${product.discountPercentage}%`}
                color="red"
              />
            </Box>
          ),
          priceSlot: (
            <ProductPrice
              price={product.price * (1 - (product.discount || 0) / 100)}
              originalPrice={product.price}
              discount={product.discountPercentage || 0}
            />
          ),
          // الريتنج
          ratingSlot: (
            <Box mt={1} display="flex" alignItems="center" gap={0.5}>
              <Rating
                name="read-only"
                value={product.rating || 0}
                readOnly
                size="small"
              />
              <Typography variant="body2" color="text.secondary">
                ({product.stock|| 0})
              </Typography>
            </Box>
          ),
        })}
      />
    </ProductSection>
  );
}
