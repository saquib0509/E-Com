import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

import './App.css';
import Home from "./Pages/Home";
import Headers from "./Components/Header"
import Footer from "./Components/Footer";
import Productpage from './Pages/Productpage'; // Adjusted the path to be consistent with Home
import Carts from "./Pages/Carts";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
