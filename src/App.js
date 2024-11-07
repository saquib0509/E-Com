import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./Pages/Home";
import Headers from "./Components/Header"
import Footer from "./Components/Footer";
import Productpage from './Pages/Productpage'; // Adjusted the path to be consistent with Home

function App() {
  return (
    <BrowserRouter> 
    <Headers/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<Productpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
