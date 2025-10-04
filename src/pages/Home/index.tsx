import React from "react";
import Header from "../../components/header";
import HeroSlider from "../../components/heroSlider";
import ProjectInfo from "../../components/projectInfo";
import Footer from "../../components/footer";
import { Row, Col } from "antd";
import "./style.css";

import Alinda8_picture_1 from "../../assets/images/Alinda8_projeBanner/Alinda8_projeBanner.webp";
import Alinda8_picture_2 from "../../assets/images/Alinda8_gallery/Alinda8_2.webp";
import Alinda8_picture_3 from "../../assets/images/Alinda8_gallery/Alinda8_7.webp";
import PrimaryButton from "../../components/primaryButton";
import { Link } from "react-router-dom";

const sharedButtonStyle: React.CSSProperties = {
  width: "clamp(100px, 35vw, 180px)",
  height: "clamp(36px, 6vw, 52px)",
  fontSize: "clamp(14px, 4vw, 20px)",
  fontWeight: 300,
  backgroundColor: "black",
  color: "white",
  border: "none",
  fontFamily: "Encode Sans Expanded, sans-serif",
};

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSlider />

      <div className="page-container">
        <Row
          className="section-wrapper"
          justify="center"
          style={{ width: "100%" }}
        >
          <Col span={24}>
            {/* Tanıtım başlığı */}
            <Row className="intro-section" justify="center">
              <Col span={24}>
                <h1 className="intro-title">BİZ KİMİZ?</h1>
              </Col>
            </Row>

            {/* Tanıtım açıklama */}
            <Row justify="center">
              <Col span={24}>
                <p className="intro-description">
                  HER TUĞLADA GÜVEN, HER DETAYDA KALİTE VERİYORUZ..!
                </p>
              </Col>
            </Row>

            {/* Buton */}
            <Row justify="center">
              <Col span={24}>
                <div className="intro-button-wrapper">
                  <PrimaryButton
                    text="İncele"
                    to="/hakkımızda"
                    style={sharedButtonStyle}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="custom-section">
        <p className="custom-text">ALİNDA 8</p>
      </div>

      {/* Proje 1 */}
      <Row className="project-row" gutter={[0, 0]} align="stretch">
        <Col xs={24} md={12}>
          <img
            src={Alinda8_picture_1}
            alt="Alinda8_picture_1"
            className="project-image"
          />
        </Col>
        <Col xs={24} md={12}>
          <ProjectInfo
            title="İlk Adım, Güçlü Bir Gelecek"
            description="Bugün, hayalini kurduğumuz yolculuğun ilk adımını atıyoruz. Bu proje, sadece bir inşaat değil; güvenin, emeğin ve geleceğe duyduğumuz inancın bir simgesi..."
            buttonText="Detaylı Bilgi"
            buttonLink="/projelerimiz"
            buttonClassName="project-detail-button"
          />
        </Col>
      </Row>

      {/* Proje 2 */}
      <Row className="project-row reverse" gutter={[0, 0]} align="stretch">
        <Col xs={24} md={12}>
          <img
            src={Alinda8_picture_2}
            alt="Alinda8_picture_2"
            className="project-image"
          />
        </Col>
        <Col xs={24} md={12}>
          <ProjectInfo
            title="Her Tuğla Bir Umut, Her Yapı Bir Hikaye"
            description="İnşa ettiğimiz her yapı, sadece taşlardan ya da betonlardan oluşmaz. Her tuğla, bir hayalin temeli, bir umudun başlangıcıdır"
            buttonText="Detaylı Bilgi"
            buttonLink="/projelerimiz"
            buttonClassName="project-detail-button"
          />
        </Col>
      </Row>

      {/* Proje 3 */}
      <Row className="project-row" gutter={[0, 0]} align="stretch">
        <Col xs={24} md={12}>
          <img
            src={Alinda8_picture_3}
            alt="Alinda8_picture_3"
            className="project-image"
          />
        </Col>
        <Col xs={24} md={12}>
          <ProjectInfo
            title="Toprağa Değdik, Zirveye Yürüyoruz"
            description="Bu proje, sadece bir temel kazısıyla başlamadı; bir hayalin, bir hedefin ilk adımı oldu. Toprağa dokunduğumuz an, başarıya uzanan yolculuğumuz da başladı. Her tuğlada azim, her katmanda kararlılık var. Şimdi, sağlam adımlarla zirveye yürüme zamanı!"
            buttonText="Detaylı Bilgi"
            buttonLink="/projelerimiz"
            buttonClassName="project-detail-button"
          />
        </Col>
      </Row>

      {/* İletişim */}
      <div className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">İLETİŞİM</h2>
          <p className="contact-description">
            Projelerimiz hakkında daha fazla bilgi almak ister misiniz?
            <br />
            Ekibimizle hemen iletişime geçin, size özel çözümler sunalım.
          </p>
          <Link
            to="/iletişim"
            className="iletisimButton"
            style={{
              width: "clamp(140px, 10vw, 211px)",
              height: "clamp(40px, 5vh, 50px)",
              backgroundColor: "black",
              color: "white",
              fontFamily: "Encode Sans Expanded, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(16px, 2vw, 24px)",
              border: "none",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            İncele
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
