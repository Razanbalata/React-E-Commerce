import { Box } from "@mui/material";
import ImageCard from "./ImageCard";
import ProductSection from "../product/ProductSection";

export default function ImagesSection() {
  return (
    <Box>
      <ProductSection title="Featured" header="Arrival" showButton={false} useIcon={false}>
       <Box sx={{ mx: "auto", mt: 4, display: "flex", gap: 2.5, flexWrap:{xs:"wrap",sm:"nowrap"}}}>
        {/* العمود الأول */}
        <Box
          sx={{
            display:"flex",
            flex: { xs: "1 1 100%", md: "1 1 50%" },
            backgroundColor: "black",
            alignItems: "flex-end",
          }}
        >
          <ImageCard
            img="/images/headerImage/1c360f790c1817d3afa266b3c9f8c81ff0ed4428.png"
            title="iPhone 14 Series"
            subtitle="PlayStation 5"
            text="Black and White version of the PS5 coming out on sale."
          />
        </Box>

        {/* العمود الثاني */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 50%" },
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <Box sx={{ flex: 1, backgroundColor: "black" }}>
            <ImageCard
              img="/images/headerImage/455c8d6408463f7e8f57dd3048a2444dbfa0cb90.jpg"
              title="iPhone 14 Series"
              flip
              subtitle="PlayStation 5"
              text="Black and White version of the PS5 coming out on sale."
              width={"70%"}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2.5}}>
            <Box sx={{ flex: 1,backgroundColor:"black",alignItems:"flex-end" ,display:"flex"}}>
              <ImageCard
                img="/images/headerImage/e5659d572977438364a41d7e8c9d1e9a794d43ed.png"
                title="iPhone 14 Series"
                subtitle="Speakers"
                text="Amazon wireless speakers"
                trans={true}
              />
            </Box>
            <Box sx={{ flex: 1,backgroundColor:"black" }}>
              <ImageCard
                img="/images/headerImage/15315cd15102562cf220504d288fa568eaa816dd.png"
                title="iPhone 14 Series"
                subtitle="Perfume"
                text="GUCCI INTENSE OUD EDP"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      </ProductSection>
    </Box>
  );
}
