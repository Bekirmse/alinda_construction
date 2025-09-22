import React from "react";
import "./style.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import iletisimImage from "../../assets/projects/iletisim.png";

// İkonlar
import addressIcon from "../../assets/icons/location.png";
import phoneIcon from "../../assets/icons/phone.png";
import mailIcon from "../../assets/icons/mail.png";

import { Row, Col } from "antd";
import instaBlack from "../../assets/icons/insta_black.png";
import facebookBlack from "../../assets/icons/facebook_black.png";

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
            <div className="divider-54" />
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
                {/* Üst: Adres */}
                <div className="contact-block1">
                  <div className="contact-heading-with-icon1">
                    <img
                      src={addressIcon}
                      alt="Adres"
                      className="contact-icon"
                    />
                    <h3 className="contact-subheading1">ADRES</h3>
                  </div>
                  <p> Atatürk Caddesi, H. Şakir Kompleks, Dükkan 3, Gönyeli </p>
                </div>

                {/* Orta: Telefon + E-posta */}
                <div className="contact-middle">
                  <div className="contact-block2">
                    <div className="contact-heading-with-icon2">
                      <img
                        src={phoneIcon}
                        alt="Telefon"
                        className="contact-icon"
                      />
                      <h3 className="contact-subheading2">TELEFON</h3>
                    </div>
                    <p>+90 548 811 09 09</p>
                  </div>

                  <div className="contact-block3">
                    <div className="contact-heading-with-icon3">
                      <img
                        src={mailIcon}
                        alt="E-Posta"
                        className="contact-icon"
                      />
                      <h3 className="contact-subheading3">E-POSTA</h3>
                    </div>
                    <p>info@alindaconstruction.com</p>
                  </div>
                </div>

                {/* Alt: Sosyal medya */}
               {/* Alt: Sosyal medya */}
<div className="contact-social contact-social--desktop">
  <h3 className="contact-subheading">SOSYAL MEDYA</h3>
  <div className="divider-54" />
  <div className="social-icons">
    <a href="https://www.instagram.com/alinda" target="_blank" rel="noopener noreferrer">
      <img src={instaBlack} alt="Instagram" className="contact-social-icon" />
    </a>
    <a href="https://www.facebook.com/alinda" target="_blank" rel="noopener noreferrer">
      <img src={facebookBlack} alt="Facebook" className="contact-social-icon" />
    </a>
  </div>
</div>

              </div>
            </div>
          </Col>

          {/* ✅ Mobil sosyal medya */}
<Col xs={24} md={0} className="contact-social contact-social--mobile">
  <h3 className="contact-subheading">SOSYAL MEDYA</h3>
  <div className="divider-54" />
  <div className="social-icons">
    <a href="https://www.instagram.com/alinda" target="_blank" rel="noopener noreferrer">
      <img src={instaBlack} alt="Instagram" className="contact-social-icon" />
    </a>
    <a href="https://www.facebook.com/alinda" target="_blank" rel="noopener noreferrer">
      <img src={facebookBlack} alt="Facebook" className="contact-social-icon" />
    </a>
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
      </section>

      {/* sadece mobilde görünsün */}
      <div className="about-footer-connector mobile-only">
        <div className="a-divider"></div>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
