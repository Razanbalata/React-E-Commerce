import React from 'react';
import { Box,Button } from '@mui/material';
function ButtonCom({value,bg="#DB4444"}) {
  return (
    <Box >
      <Button variant="contained" sx={{backgroundColor:bg,textTransform:"capitalize",padding:"10px 50px",display:{xs:"none",sm:"block"}}}>{value}</Button>
    </Box>
  );
}

export default ButtonCom;
