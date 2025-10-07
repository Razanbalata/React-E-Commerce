import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import React, { Suspense, lazy } from "react";
import Login from "./pages/login/Login";

const Contact = lazy(() => import("./pages/contact/Contact"));
const About = lazy(() => import("./pages/about/About"));
const SignUp = lazy(() => import("./pages/signup/SignUp"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
