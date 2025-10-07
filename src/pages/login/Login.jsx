import React from 'react';
import Layout from '../Layout'
import SignContent from '../signup/SignContent';
import LoginForm from './LoginForm'
function Login() {
  return (
    <Layout>
       <SignContent>
        <LoginForm/>
       </SignContent>
    </Layout>
  );
}

export default Login;
