import React from "react";
import Header from "../../components/header";
import HeroSlider from "../../components/heroSlider";
import ProjectInfo from "../../components/projectInfo";
import Footer from "../../components/footer";
import { Row, Col } from "antd";
import "./style.css";

import proje3 from "../../assets/projects/proje3.png";
import proje4 from "../../assets/projects/proje4.png";
import proje5 from "../../assets/projects/proje5.png";
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
  fontFamily: "Biondi Sans, sans-serif",
};

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Header />
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
                  Alinda Construction, Kuzey Kıbrıs’ta inşaat sektörünün
                  güvenilir ve yenilikçi temsilcilerinden biridir. Kurulduğumuz
                  günden bu yana kalite, estetik ve sürdürülebilirliği ön planda
                  tutarak konut, ticari ve altyapı projelerine imzamızı attık.
                  Alanında uzman ekibimiz ve modern mühendislik
                  yaklaşımlarımızla; sadece yapılar değil, yaşam alanları inşa
                  ediyoruz. Müşteri memnuniyetini temel ilke olarak benimseyen
                  firmamız, her projeye özel çözümler geliştirerek sektörde fark
                  yaratmayı hedeflemektedir.
                </p>
              </Col>
            </Row>

            {/* Buton */}
            <Row justify="center">
              <Col span={24}>
                <div className="intro-button-wrapper">
                  <PrimaryButton
                    text="İncele"
                    href="/about"
                    style={sharedButtonStyle}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="custom-section">
        <p className="custom-text">PROJELERİMİZ</p>
      </div>

      {/* Proje 1 */}
      <Row className="project-row" gutter={[0, 0]} align="stretch">
        <Col xs={24} md={12}>
          <img src={proje3} alt="Proje 3" className="project-image" />
        </Col>
        <Col xs={24} md={12}>
          <ProjectInfo
            title="Proje 1"
            description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet..."
            buttonText="Detaylı Bilgi"
            buttonLink="/projeler"
            buttonClassName="project-detail-button"
          />
        </Col>
      </Row>

      {/* Proje 2 */}
      <Row className="project-row reverse" gutter={[0, 0]} align="stretch">
        <Col xs={24} md={12}>
          <img src={proje4} alt="Proje 4" className="project-image" />
        </Col>
        <Col xs={24} md={12}>
          <ProjectInfo
            title="Proje 2"
            description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet..."
            buttonText="Detaylı Bilgi"
            buttonLink="/projeler"
            buttonClassName="project-detail-button"
          />
        </Col>
      </Row>

      {/* Proje 3 */}
      <Row className="project-row" gutter={[0, 0]} align="stretch">
        <Col xs={24} md={12}>
          <img src={proje5} alt="Proje 5" className="project-image" />
        </Col>
        <Col xs={24} md={12}>
          <ProjectInfo
            title="Proje 3"
            description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet..."
            buttonText="Detaylı Bilgi"
            buttonLink="/projeler"
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
            to="/iletisim"
            className="iletisimButton"
            style={{
              width: "clamp(140px, 10vw, 211px)",
              height: "clamp(40px, 5vh, 50px)",
              backgroundColor: "black",
              color: "white",
              fontFamily: "Biondi Sans, sans-serif",
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
