import React from 'react';
import Layout from '../Layout'
import SignContent from '../signup/SignContent';
import LoginForm from './LoginForm'
function Login() {
  return (
    <Layout headerConfig={{showUser: false, showWishlist: false, showCart: false}}>
       <SignContent>
        <LoginForm/>
       </SignContent>
    </Layout>
  );
}

export default Login;
