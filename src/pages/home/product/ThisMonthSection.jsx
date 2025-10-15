import ProductSection from "../product/ProductSection";
import ProductGrid from "../product/ProductGrid";
import { sectionTwoProducts } from "../../../components/data/data";
import { Box, Rating, Typography } from "@mui/material";
import ProductPrice from "./ProductPrice";
import ProductActions from "./ProductActions";
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";
export default function ThisMonthSection({showHead}) {

  const { products } = useContext(ProductsContext);

  return (
    <ProductSection
      title="This Month"
      header="Best Selling Products"
      useIcon={false}
      showButton={true}
      showFalshSale={showHead}
    >
      <ProductGrid
        products={products.slice(8,16)}
        columns={4}
        wrap={false}
        renderSlots={(product) => ({
          // الأكشنز (wishlist + view)
          actionsSlot: <ProductActions />,

          priceSlot: (
            <ProductPrice
              price={product.price}
              originalPrice={product.price}
              discount={product.discountPercentage}
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
                ({product.stock})
              </Typography>
            </Box>
          ),
        })}
      />
    </ProductSection>
  );
}
