import React from "react";
import SectionTitle from "./SectionTitle";
import { Box, Container, Divider } from "@mui/material";
import ButtonCom from "../../../components/buttons/ButtonCom";
import FlashSaleHeader from "./FlashSaleTimer";

function ProductSection({
  title,
  header,
  headerContent,
  children,
  showButton = true,
  useIcon = true,
  showHr = false,
  showFalshSale=true
}) {
  return (
    <Container disableGutters>
      <Box padding={{xs:2,lg:0}}>
        {/* عنوان السيكشن */}
        <SectionTitle text={title} />

        {/* الهيدر المخصص (FlashSaleHeader, ProductHeader, …) */}
        {showFalshSale && <FlashSaleHeader
          title={header}
          useIcon={useIcon}
          showIcons={showButton}
        >
          {headerContent}
        </FlashSaleHeader>}

        {/* المنتجات */}
        {children}

        {/* الزر (اختياري) */}
        {useIcon && (
          <Box display="flex" justifyContent="center" marginTop={8}>
            <ButtonCom value="View All Products" trans={showHr} />
          </Box>
        )}
        {showHr && <Divider sx={{
          borderColor: "rgba(0,0,0,0.1)",
          my: 8,
          width: "100%",
        }}  fullWidth />}
      </Box>
    </Container>
  );
}

export default ProductSection;
