import ProductSection from "../product/ProductSection";
import ProductGrid from "../product/ProductGrid";
import ColorBadge from "../product/Badge";
import { sectionOneProducts } from '../data/data';
import TimerDisplay from "../product/TimerDisplay";

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
        
      >
        {(product) => <ColorBadge value={`${product.discount}%`} color="red" />}
      </ProductGrid>
      
    </ProductSection>
  );
}
