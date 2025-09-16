import React from "react";
import { Row, Col } from "antd";
import "./style.css";
import alindaWhiteLogo from "../../assets/icons/Alinda-logo-White.png"; // ✅ logo eklendi

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <Row gutter={[0, 32]} align="top" justify="space-between">
          {/* Sol Blok */}
          <Col xs={24} md={12} lg={10} className="footer-col">
            <div className="footer-brand-block">
              {/* ✅ Logo görseli */}
              <img
                src={alindaWhiteLogo}
                alt="Alinda Construction Logo"
                className="footer-logo"
              />

              <p className="footer-desc">
                MİMARİ ESTETİK İLE MÜHENDİSLİK GÜCÜNÜ BİR ARAYA GETİRİYORUZ.
              </p>

              <div className="footer-line" />

              <p className="footer-section-title">SATIŞ VE MÜŞTERİ HİZMETLERİ</p>

              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <span className="icon phone" /> +90 548 811 09 09
                </div>
                <div className="footer-contact-item">
                  <span className="icon mail" /> alindaconstruction@mail.com
                </div>
                <div className="footer-contact-item">
                  <span className="icon location" /> Atatürk Caddesi, H. Şakir Kompleks, Dükkan 3, Gönyeli
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className="footer-social-block">
                <p className="footer-section-title">SOSYAL MEDYA</p>
                <div className="footer-divider" />
                <div className="footer-social">
                  <div className="social-box" />
                  <div className="social-box" />
                  <div className="social-box" />
                  <div className="social-box" />
                </div>
              </div>
            </div>
          </Col>

          {/* Orta Blok — PROJELERİMİZ */}
          <Col xs={12} md={6} lg={7} className="footer-col">
            <div className="footer-link-block footer-links--projects">
              <p className="footer-section-title">PROJELERİMİZ</p>
              <div className="footer-line2" />
              <p>Proje 1</p>
              <p>Proje 2</p>
              <p>Proje 3</p>
            </div>
          </Col>

          {/* Sağ Blok — HIZLI ERİŞİM */}
          <Col xs={12} md={6} lg={7} className="footer-col">
            <div className="footer-link-block footer-link-block--right">
              <p className="footer-section-title">HIZLI ERİŞİM</p>
              <div className="footer-line2" />
              <p>Biz kimiz</p>
              <p>Projeler</p>
              <p>İletişim</p>
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
            <a href="#">Gizlilik Politikası</a>
            <a href="#">KVKK</a>
            <a href="#">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
