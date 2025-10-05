import React from 'react';
import TopHeaderContent from '../header/TopHeaderContent';
import LanguageSelector from '../header/LanguageSelector';
import { Box } from '@mui/material';
const TopHeader = () => (
  <Box display={{sx:"none",sm:"none",lg:"block"}} width={"100%"}>
    <TopHeaderContent />
      <LanguageSelector />
  </Box>
);
export default TopHeader;