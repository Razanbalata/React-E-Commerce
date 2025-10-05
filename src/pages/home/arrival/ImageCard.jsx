import { Box, Typography } from "@mui/material";
import TextCom from "../heroSection/TextCom";
import ImageAtom from "./ImageAtom";

export default function ImageCard({
  img,
  title,
  subtitle = "",
  text,
  flip,
  trans,
  width,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <ImageAtom
        img={img}
        alt={title}
        flip={flip}
        trans={trans}
        width={width}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          color: "white",
          zIndex: 2,
          p: 1.5,
        }}
        display={{xs:"none",md:"flex"}}
      >
        <TextCom
          size="14px"
          type="p"
          title={subtitle}
          text={text}
          bg="transparent"
          width="100%"
          showIcon={false}
        >
          <Typography
            component="a"
            href="#"
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "underline",
            }}
            
          >
            Shop Now
          </Typography>
        </TextCom>
      </Box>
    </Box>
  );
}
