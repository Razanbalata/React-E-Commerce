import ProductSection from "../product/ProductSection";
import ProductGrid from "../product/ProductGrid";
import { sectionTwoProducts } from '../../../components/data/data';
export default function ThisMonthSection() {
  return (
    <ProductSection
      title="This Month"
      header="Best Selling Products"
      useIcon={false}
      showButton={true}
      
    >
      <ProductGrid products={sectionTwoProducts} columns={4} wrap>
        {(product) => null}
      </ProductGrid>
    </ProductSection>
  );
}
