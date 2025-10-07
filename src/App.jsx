import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Contact from "./pages/contact/contact";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
