import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./pages/Form";
import Home from "./components/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";


  function App() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
  

export default App;
