import { Box } from "@mui/material";

export default function ImageAtom({ img, alt, width = "100%", flip, trans }) {
  return (
    <Box
      component="img"
      src={img}
      alt={alt}
      sx={{
        width: { width },
        height: "auto",
        objectFit: "cover",
        display: "block",
        transform: `
          ${flip ? "scaleX(-1)" : ""}
          ${trans ? "translate(30px,-30px) scale(1.5)" : ""}
        `,
      }}
    />
  );
}
