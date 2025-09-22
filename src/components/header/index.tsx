// src/components/header/index.tsx
import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import alindaLogoBlack from "../../assets/icons/Alinda-logo-Black.png";
import alindaLogoWhite from "../../assets/icons/Alinda-logo-White.png";

/** ====== DEBUG / LOG HELPERS ====== */
const DEBUG = true; // tüm logları kapatmak için false yap
const TAG = "[Header]";

function log(...args: any[]) {
  if (!DEBUG) return;
  // tek yerde format
  // eslint-disable-next-line no-console
  console.log(TAG, ...args);
}
function warn(...args: any[]) {
  if (!DEBUG) return;
  // eslint-disable-next-line no-console
  console.warn(TAG, ...args);
}
function error(...args: any[]) {
  if (!DEBUG) return;
  // eslint-disable-next-line no-console
  console.error(TAG, ...args);
}

/** ====== COMPONENT ====== */
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ref’ler (sızıntı/çakışma yakalama)
  const mountedRef = useRef(false);
  const lastScrollStateRef = useRef<boolean>(false);

  log("file loaded");

  /** Scroll state – passive + ilk render’da senkron güncelle + gereksiz setState koruması */
  useEffect(() => {
    mountedRef.current = true;
    log("mount");

    const onScroll = () => {
      try {
        const next = window.scrollY > 20;
        if (lastScrollStateRef.current !== next) {
          log("scroll ->", { scrollY: window.scrollY, next });
          lastScrollStateRef.current = next;
          setScrolled(next);
        }
      } catch (e) {
        error("onScroll exception:", e);
      }
    };

    // attach
    window.addEventListener("scroll", onScroll, { passive: true });
    log("scroll listener attached (passive)");

    // ilk render’da state’i doğrula
    onScroll();

    // cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
      mountedRef.current = false;
      log("unmount & scroll listener removed");
    };
  }, []);

  /** menuOpen değişimini takip et */
  useEffect(() => {
    log("menuOpen changed ->", menuOpen);
  }, [menuOpen]);

  /** scrolled değişimini takip et */
  useEffect(() => {
    log("scrolled changed ->", scrolled);
  }, [scrolled]);

  /** overlay/body scroll kilidi – açıkken arkaplan kaymasın (log’lu) */
  useEffect(() => {
    try {
      if (menuOpen) {
        document.body.style.overflow = "hidden";
        log("body scroll locked");
      } else {
        document.body.style.overflow = "";
        log("body scroll unlocked");
      }
    } catch (e) {
      warn("body overflow toggle failed:", e);
    }
  }, [menuOpen]);

  /** event handlers (log’lu) */
  const openMenu = () => {
    log("openMenu clicked");
    setMenuOpen(true);
  };
  const closeMenu = () => {
    log("closeMenu clicked");
    setMenuOpen(false);
  };
  const onOverlayClick = () => {
    log("overlay clicked");
    setMenuOpen(false);
  };
  const onNavClick = (to: string) => {
    log("nav link clicked ->", to);
    setMenuOpen(false);
  };

  // Logo seçimi
  const currentLogo = scrolled ? alindaLogoBlack : alindaLogoWhite;

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-content">
          <Link to="/" onClick={() => onNavClick("/")}>
            <img src={currentLogo} alt="Alinda Logo" className="header-logo" />
          </Link>

          {/* Masaüstü butonlar */}
          <div className="header-buttons">
            <Link
              to="/projeler"
              className="header-button"
              onClick={() => onNavClick("/projeler")}
            >
              Projeler
            </Link>
            <button className="header-button" onClick={openMenu}>
              Menü
            </button>
          </div>

          {/* Mobil burger */}
          <button
            className={`mobile-burger ${scrolled ? "scrolled" : ""}`}
            onClick={openMenu}
            aria-label="Menüyü Aç"
          >
            <MenuOutlined style={{ fontSize: "28px" }} />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" onClick={() => onNavClick("/")}>
            <img
              src={alindaLogoBlack}
              alt="Alinda Logo"
              className="sidebar-logo"
            />
          </Link>
        </div>

        <div className="sidebar-divider"></div>

        <nav className="sidebar-menu">
          <Link to="/projeler" onClick={() => onNavClick("/projeler")}>
            Projeler
          </Link>
          <Link to="/about" onClick={() => onNavClick("/about")}>
            Hakkımızda
          </Link>
          <Link to="/iletisim" onClick={() => onNavClick("/iletisim")}>
            Bize Ulaşın
          </Link>
        </nav>

        <button className="sidebar-close" onClick={closeMenu}>
          ✕
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={onOverlayClick} />}
    </>
  );
};

export default Header;
