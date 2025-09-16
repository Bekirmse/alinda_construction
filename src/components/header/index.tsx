import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import alindaLogoBlack from "../../assets/icons/Alinda-logo-Black.png";
import alindaLogoWhite from "../../assets/icons/Alinda-logo-White.png";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // logoyu state'e göre belirle
  const currentLogo = scrolled ? alindaLogoBlack : alindaLogoWhite;

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-content">
          <Link to="/">
            <img src={currentLogo} alt="Alinda Logo" className="header-logo" />
          </Link>

          <div className="header-buttons">
            <Link to="/projeler" className="header-button">
              Projeler
            </Link>
            <button className="header-button" onClick={() => setMenuOpen(true)}>
              Menü
            </button>
          </div>
        </div>
      </header>

    {/* Sidebar */}
<div className={`sidebar ${menuOpen ? "open" : ""}`}>
  <div className="sidebar-header">
    <Link to="/" onClick={() => setMenuOpen(false)}>
      {/* Sidebar'da her zaman siyah logo */}
      <img src={alindaLogoBlack} alt="Alinda Logo" className="sidebar-logo" />
    </Link>
  </div>

  <div className="sidebar-divider"></div>

  <nav className="sidebar-menu">
    <Link to="/projeler" onClick={() => setMenuOpen(false)}>
      Projeler
    </Link>
    <Link to="/about" onClick={() => setMenuOpen(false)}>
      Hakkımızda
    </Link>
    <Link to="/iletisim" onClick={() => setMenuOpen(false)}>
      Bize Ulaşın
    </Link>
  </nav>

  <button className="sidebar-close" onClick={() => setMenuOpen(false)}>
    ✕
  </button>
</div>


      {/* Overlay */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Header;
