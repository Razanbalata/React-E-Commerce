import React from 'react';
import Dashboard from '../heroSection/Dashboard';
import { Box } from '@mui/material';
import TextCom from '../heroSection/TextCom';
import Image from '../arrival/Image';
import TimerDisplay from '../product/TimerDisplay';
import ButtonCom from '../buttons/ButtonCom';
function CategoriesDashboard() {
  return (
    <Dashboard padding={{ x: 0, y: 10 }} pb={4} width='100%'>
    <Box width={{ xs: "100%" }}>
      <TextCom
        type="h3"
        title="Categories"
        text="Enhance Your Music Experience"
        showIcon={false}
        width='100%'
        size={{xs:30,lg:50}}
      >
        <TimerDisplay justify='flex-start' variant='circle' />
        <Box sx={{paddingTop:"30px"}}><ButtonCom value={"Shop Now"} bg="#00FF66"></ButtonCom></Box>
      </TextCom>
    </Box>
    <Box
      width={{ xs: "100%"}}
      display="flex"
      justifyContent="center"
    >
      <Image width="100%" src="/public/images/headerImage/3cc943ca7e210f637fc0504b7d93cd207df744c2.png" alt="Banner 2" trans={true} />
    </Box>
  </Dashboard>
  );
}

export default CategoriesDashboard;
