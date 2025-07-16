import React from "react";
import { Row, Col } from "antd";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <Row gutter={[48, 32]}>
          {/* Sol Blok */}
          <Col xs={24} md={12} lg={10}>
            <div className="footer-brand-block">
              <div className="footer-logo-placeholder" />
              <p className="footer-desc">
                MİMARİ ESTETİK İLE MÜHENDİSLİK GÜCÜNÜ BİR ARAYA GETİRİYORUZ.
              </p>
              <div className="footer-line" />
              <p className="footer-section-title">
                SATIŞ VE MÜŞTERİ HİZMETLERİ
              </p>
              <div className="footer-contact-list">
                {" "}
                {/* ✅ Yeni kapsayıcı */}
                <div className="footer-contact-item">
                  <span className="icon phone" /> 0533 xxx xx xx
                </div>
                <div className="footer-contact-item">
                  <span className="icon mail" /> alindaconstruction@mail.com
                </div>
                <div className="footer-contact-item">
                  <span className="icon location" /> Konum
                </div>
              </div>
            </div>
          </Col>

          {/* Orta Blok */}
          <Col
            xs={12}
            md={6}
            lg={7}
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <div className="footer-link-block footer-links-block">
              <p className="footer-section-title">PROJELERİMİZ</p>
              <div className="footer-line2" />
              <p>Proje 1</p>
              <p>Proje 2</p>
              <p>Proje 3</p>
            </div>
          </Col>

          {/* Sağ Blok */}
          <Col
            xs={12}
            md={6}
            lg={7}
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <div className="footer-link-block footer-links-block">
              <p className="footer-section-title">HIZLI ERİŞİM</p>
              <div className="footer-line2" />
              <p>Biz kimiz</p>
              <p>Projeler</p>
              <p>İletişim</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
