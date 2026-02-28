import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Company from "./pages/about/Company";
import Team from "./pages/about/Team";
import MissionVision from "./pages/about/MissionVision";
import Services from "./pages/Services";
import Programs from "./pages/Programs";
import Placement from "./pages/Placement";
import Contact from "./pages/Contact";
import Verify from "./pages/Verify";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Company />} />
        <Route path="/about/company" element={<Company />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/mission-vision" element={<MissionVision />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
