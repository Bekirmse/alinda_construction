import React from "react";
import "./style.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import iletisimImage from "../../assets/projects/iletisim.png";

// İkonlar
import addressIcon from "../../assets/icons/location_icon.png";
import phoneIcon from "../../assets/icons/phone_icon.png";
import mailIcon from "../../assets/icons/mail_icon.png";

import { Row, Col } from "antd";

const Contact: React.FC = () => {
  return (
    <main className="contact-page">
      {/* Hero Görsel */}
      <div className="contact-hero">
        <img
          src={iletisimImage}
          alt="İletişim"
          className="contact-hero-image"
        />
      </div>

      <Header />

      {/* Sayfa Başlığı */}
      <section className="contact-heading-wrapper">
        <h1 className="contact-main-title">İLETİŞİM</h1>
      </section>

      <div className="contact-info">
        <Row>
          <Col>
            <h2 className="contact-section-title">BİZE ULAŞIN</h2>
            <p className="contact-section-desc">
              Sorularınız, önerileriniz veya işbirliği talepleriniz için bizimle
              iletişime geçebilirsiniz.
            </p>
          </Col>
        </Row>
      </div>

      {/* Beyaz Alan */}
      <section className="contact-white-wrapper">
        <Row gutter={[0, 0]} className="contact-grid">
          {/* Sol Bilgi Bölgesi */}
          <Col xs={24} md={12}>
            <div className="contact-info">
              <div className="contact-detail">
                <div className="contact-block">
                  <div className="contact-heading-with-icon">
                    <img
                      src={addressIcon}
                      alt="Adres"
                      className="contact-icon"
                    />
                    <h3 className="contact-subheading">ADRES</h3>
                  </div>
                  <p>
                    Sorularınız, önerileriniz veya işbirliği talepleriniz için
                    bizimle iletişime geçebilirsiniz.
                  </p>
                </div>

                <div className="contact-block">
                  <div className="contact-heading-with-icon">
                    <img
                      src={phoneIcon}
                      alt="Telefon"
                      className="contact-icon"
                    />
                    <h3 className="contact-subheading">TELEFON</h3>
                  </div>
                  <p>+90 533 XXX XX XX</p>
                </div>

                <div className="contact-block">
                  <div className="contact-heading-with-icon">
                    <img
                      src={mailIcon}
                      alt="E-Posta"
                      className="contact-icon"
                    />
                    <h3 className="contact-subheading">E-POSTA</h3>
                  </div>
                  <p>alindaconstruction@mail.com</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Sağ Harita Bölgesi */}
          <Col xs={24} md={12}>
            <div className="contact-map">
              <iframe
                title="Harita"
                src="https://maps.google.com/maps?q=lefkosa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="responsive-map"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* ✅ Sosyal medya Row'un dışında, altta */}
        <div className="contact-social">
          <h3 className="contact-subheading">SOSYAL MEDYA</h3>
          <div className="divider-54" />
          <div className="social-icons">
            <div className="social-box" />
            <div className="social-box" />
            <div className="social-box" />
            <div className="social-box" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
