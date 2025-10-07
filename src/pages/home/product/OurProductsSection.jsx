import ProductSection from "../product/ProductSection";
import ProductGrid from "../product/ProductGrid";
import { sectionThreeProducts } from "../../../components/data/data";
import { Box, Rating,Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ColorBadge from "../product/Badge";
import ProductActions from "./ProductActions";
import ProductPrice from "./ProductPrice";

export default function OurProductsSection() {
  return (
    <ProductSection
      title="Our Products"
      header="Explore Our Products"
      showButton
    >
      <ProductGrid
        products={sectionThreeProducts}
        columns={4}
        wrap
        variant="inline"
        renderSlots={(product) => ({
          // الأكشنز (wishlist + view)
          actionsSlot: <ProductActions />,
          childrenSlot: (
            <>
              {product.newLabel && <ColorBadge value="NEW" color="#00FF66" />}
              {product.dotColors && (
                <Box display="flex" gap={0} mt={1}>
                  {product.dotColors.map((color, i) => (
                    <FiberManualRecordIcon
                      key={i}
                      sx={{ color, fontSize: 20 }}
                    />
                  ))}
                </Box>
              )}
            </>
          ),
          priceSlot: (
            <Box display="flex" alignItems="center" gap={1} mt={0.5}>
              <ProductPrice
                price={product.originalPrice}
                originalPrice={product.originalPrice}
                discount={product.discount}
              />
              <Box display="flex" alignItems="center" gap={0.5}>
                <Rating name="read-only" value={product.rating} readOnly size="small" />
                <Typography variant="body2" color="text.secondary">
                  ({product.ratingCount})
                </Typography>
              </Box>
            </Box>
          ),
        })}
      />
    </ProductSection>
  );
}
