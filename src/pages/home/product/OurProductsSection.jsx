import ProductSection from "../product/ProductSection";
import ProductGrid from "../product/ProductGrid";
import {sectionThreeProducts} from '../../../components/data/data'
import { Box } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ColorBadge from "../product/Badge";

export default function OurProductsSection() {
  return (
    <ProductSection
      title="Our Products"
      header="Explore Our Products"
      showButton
    >
      <ProductGrid products={sectionThreeProducts} columns={4} wrap variant="inline" >
        {(product) => (
          <>
            {/* الدوتس إذا موجودة */}
             {product.newLabel && <ColorBadge value={`NEW`} color="#00FF66" />}
            {product.dotColors && (
              <Box display="flex" gap={0} mt={1}>
                {product.dotColors.map((color, i) => (
                  <FiberManualRecordIcon key={i} sx={{ color, fontSize: 20 }} />
                ))}
              </Box>
            )}
          </>
        )}
      </ProductGrid>
    </ProductSection>
  );
}
