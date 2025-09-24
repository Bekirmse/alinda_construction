import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import alindaLogoBlack from "../../assets/icons/Logo/Logo_Black/Alinda-logo-Black.png";
import alindaLogoWhite from "../../assets/icons/Logo/Logo_White/Alinda-logo-White.png";

type HeaderProps = {
  /**
   * fixedTheme verildiğinde scroll'a GÖRE TEMA DEĞİŞMEZ.
   * "light" => en baştan scrolled=true gibi davranır (siyah içerik/ikonlar, siyah logo).
   * "dark"  => en baştan scrolled=false gibi davranır (beyaz içerik/ikonlar, beyaz logo).
   * undefined/null => eski davranış (scroll olunca değişir).
   */
  fixedTheme?: "light" | "dark";
};

const DEBUG = false;
const TAG = "[Header]";
const warn = (...a: any[]) => DEBUG && console.warn(TAG, ...a);
const error = (...a: any[]) => DEBUG && console.error(TAG, ...a);

const Header: React.FC<HeaderProps> = ({ fixedTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const mountedRef = useRef(false);
  const lastScrollStateRef = useRef<boolean>(false);

  useEffect(() => {
    mountedRef.current = true;

    // Tema kilitliyse scroll’u dinleme
    if (fixedTheme) {
      setScrolled(fixedTheme === "light"); // light => siyah içerik modu
      return () => {
        mountedRef.current = false;
      };
    }

    const onScroll = () => {
      try {
        const next = window.scrollY > 20;
        if (lastScrollStateRef.current !== next) {
          lastScrollStateRef.current = next;
          setScrolled(next);
        }
      } catch (e) {
        error("onScroll exception:", e);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // ilk durumda doğrula

    return () => {
      window.removeEventListener("scroll", onScroll);
      mountedRef.current = false;
    };
  }, [fixedTheme]);

  useEffect(() => {
    try {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    } catch (e) {
      warn("body overflow toggle failed:", e);
    }
  }, [menuOpen]);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const onOverlayClick = () => setMenuOpen(false);
  const onNavClick = () => setMenuOpen(false);

  // scrolled=true ise siyah içerik modundasın => siyah logo
  const currentLogo = scrolled ? alindaLogoBlack : alindaLogoWhite;

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-content">
          <Link to="/" onClick={onNavClick}>
            <img src={currentLogo} alt="Alinda Logo" className="header-logo" />
          </Link>

          <div className="header-buttons">
            <Link to="/projeler" className="header-button" onClick={onNavClick}>
              Projeler
            </Link>
            <button className="header-button" onClick={openMenu}>
              Menü
            </button>
          </div>

          <button
            className={`mobile-burger ${scrolled ? "scrolled" : ""}`}
            onClick={openMenu}
            aria-label="Menüyü Aç"
          >
            <MenuOutlined style={{ fontSize: "28px" }} />
          </button>
        </div>
      </header>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" onClick={onNavClick}>
            <img
              src={alindaLogoBlack}
              alt="Alinda Logo"
              className="sidebar-logo"
            />
          </Link>
        </div>

        <div className="sidebar-divider"></div>

        <nav className="sidebar-menu">
          <Link to="/projeler" onClick={onNavClick}>
            Projeler
          </Link>
          <Link to="/about" onClick={onNavClick}>
            Hakkımızda
          </Link>
          <Link to="/iletisim" onClick={onNavClick}>
            Bize Ulaşın
          </Link>
        </nav>

        <button className="sidebar-close" onClick={closeMenu}>
          ✕
        </button>
      </div>

      {menuOpen && <div className="overlay" onClick={onOverlayClick} />}
    </>
  );
};

export default Header;
