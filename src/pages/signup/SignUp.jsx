import React from 'react';
import Layout from '../Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { Box } from '@mui/material';
import SignContent from './SignContent';
import SignForm from './SignForm';

function SignUp() {
  return (
    <Layout headerConfig={{showUser: false, showWishlist: false, showCart: false}}>
        <Box>
            <SignContent>
              <SignForm/>
            </SignContent>
        </Box>
        
    </Layout>
  );
}

export default SignUp;
