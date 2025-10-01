import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

import alindaWhiteLogo from "../../assets/icons/Logo/Logo_White/Alinda-logo-White.png";
import instaWhite from "../../assets/icons/SocialMedia/SocialMedia_White/insta_white.png";
import facebookWhite from "../../assets/icons/SocialMedia/SocialMedia_White/facebook_white.png";
import phoneIcon from "../../assets/icons/Contact/Contact_White/phone_white.png";
import mailIcon from "../../assets/icons/Contact/Contact_White/mail_white.png";
import locationIcon from "../../assets/icons/Contact/Contact_White/location_white.png";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <Row gutter={[0, 32]} align="top" justify="space-between">
          {/* Sol Blok */}
          <Col xs={24} md={12} lg={10} className="footer-col">
            <div className="footer-brand-block">
              <img
                src={alindaWhiteLogo}
                alt="Alinda Construction Logo"
                className="footer-logo"
              />

              <p className="footer-desc">
                MİMARİ ESTETİK İLE MÜHENDİSLİK GÜCÜNÜ BİR ARAYA GETİRİYORUZ.
              </p>

              <div className="footer-line" />

              <p className="footer-section-title">
                SATIŞ VE MÜŞTERİ HİZMETLERİ
              </p>

              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <img
                    src={phoneIcon}
                    alt="Telefon"
                    className="footer-contact-icon"
                  />
                  +90 548 811 09 09
                </div>
                <div className="footer-contact-item">
                  <img
                    src={mailIcon}
                    alt="E-posta"
                    className="footer-contact-icon"
                  />
                  info@alindaconstruction.com
                </div>
                <div className="footer-contact-item">
                  <img
                    src={locationIcon}
                    alt="Adres"
                    className="footer-contact-icon"
                  />
                  Atatürk Caddesi, H. Şakir Kompleks, Dükkan 3, Gönyeli
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className="footer-social-block">
                <p className="footer-section-title">SOSYAL MEDYA</p>
                <div className="footer-divider" />
                <div className="footer-social">
                  <a
                    href="https://www.instagram.com/alinda.construction?igsh=YTUwNHo5d2F3cWJr&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={instaWhite}
                      alt="Instagram"
                      className="social-icon"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1DJqQvoqao/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={facebookWhite}
                      alt="Facebook"
                      className="social-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Orta Blok — PROJELERİMİZ */}
          <Col xs={24} md={6} lg={7} className="footer-col">
            <div className="footer-link-block footer-links--projects">
              <p className="footer-section-title">PROJELERİMİZ</p>
              <div className="footer-line2" />
              <Link to="/projeler">Alinda 8</Link>
            </div>
          </Col>

          {/* Sağ Blok — HIZLI ERİŞİM */}
          <Col xs={24} md={6} lg={7} className="footer-col">
            <div className="footer-link-block footer-link-block--right">
              <p className="footer-section-title">HIZLI ERİŞİM</p>
              <div className="footer-line2" />
              <Link to="/about">Biz kimiz</Link>
              <Link to="/projeler">Projeler</Link>
              <Link to="/iletisim">İletişim</Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* Uzun Divider */}
      <div className="footer-bottom-line" />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <div className="footer-bottom-left">
            © 2025 Alinda Construction. Tüm hakları saklıdır.
          </div>
          <div className="footer-bottom-right">
            <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link to="/kvkk">KVKK</Link>
            <Link to="/kullanim-kosullari">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
