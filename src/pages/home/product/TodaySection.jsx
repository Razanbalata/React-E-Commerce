import ProductSection from "./ProductSection";
import ProductGrid from "./ProductGrid";
import ColorBadge from "./Badge";
import { sectionOneProducts } from '../../../components/data/data';
import TimerDisplay from "./TimerDisplay";

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
