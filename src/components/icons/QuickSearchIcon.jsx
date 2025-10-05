import React from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const QuickSearchIcon = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 1, position: 'relative' }}>
    <SearchIcon sx={{ fontSize: 22, color: 'black', position: 'absolute', top: 0, left: -14 }} />
  </Box>
);
export default QuickSearchIcon;