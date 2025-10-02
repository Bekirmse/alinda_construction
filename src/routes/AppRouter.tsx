import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Project from "../pages/Project";

// ScrollToTop component (hash varsa sıfırlamaz!)
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletişim" element={<Contact />} />
        <Route path="/hakkımızda" element={<About />} />
        <Route path="/projelerimiz" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
