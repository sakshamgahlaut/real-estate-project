import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Property Details Route */}
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;