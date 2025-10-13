import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';

function Counter({ value = 0, onChange }) {
  const [count, setCount] = useState(value);

  const handleIncrease = () => {
    setCount(prev => {
      const val = prev + 1;
      onChange && onChange(val);
      return val;
    });
  };

  const handleDecrease = () => {
    setCount(prev => {
      const val = prev > 0 ? prev - 1 : 0;
      onChange && onChange(val);
      return val;
    });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={0.5}
      border="1px solid #ccc"
      borderRadius={1}
      px={1}
      py={0.25}
      width={'fit-content'}
    >
      <Typography variant="body2" textAlign="center">{count}</Typography>
      <Box display="flex" flexDirection="column" ml={0.5}>
        <IconButton onClick={handleIncrease} size="small" sx={{ padding: 0 }}>
          <ArrowDropUp fontSize="small" />
        </IconButton>
        <IconButton onClick={handleDecrease} size="small" sx={{ padding: 0 }}>
          <ArrowDropDown fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Counter;
