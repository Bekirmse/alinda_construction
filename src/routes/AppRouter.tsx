import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Project from '../pages/Project'; // 👈 yeni eklenen sayfa

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projeler" element={<Project />} /> {/* 👈 yeni route */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
