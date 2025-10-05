import React from 'react';
import { Box } from '@mui/material';
const Image = ({width="50%", src, alt = '', trans = false }) => (
  <Box width={width} bgcolor="black" padding={{xs:"25px",sm:0}}>
    <img
      src={src}
      alt={alt}
      style={{
        width: trans ? '70%' : '100%',
        height: '100%',
        objectFit: 'cover',
        transform: trans ? 'scale(-1.6,1.6) translate(-14px,-5px)' : 'none',
        margin:{xs:width === "71%" ? "auto" : 0 ,sm:0},
        
      }}
    />
  </Box>
);
export default Image;