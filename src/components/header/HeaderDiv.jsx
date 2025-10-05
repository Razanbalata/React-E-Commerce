import React from 'react';
import TopHeader from './TopHeader';
import Header from './Header';
import Container from '@mui/material/Container';
const HeaderDiv = () => (
  <div>
    <TopHeader />
    <Container sx={{marginTop:{xs:0,lg:3}} } disableGutters>
      <Header />
    </Container>
  </div>
);
export default HeaderDiv;