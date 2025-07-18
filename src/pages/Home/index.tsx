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
  width: "clamp(100px, 35vw, 180px)", // 🔽 140 → 100
  height: "clamp(36px, 6vw, 52px)",   // 🔽 40 → 36
  fontSize: "clamp(14px, 4vw, 20px)", // 🔽 16 → 14
  fontWeight: 300,
  backgroundColor: "black",
  color: "white",
  border: "none",
  fontFamily: "Biondi Sans, sans-serif",
};


const Home = () => {
  return (
    <div className="home-wrapper">
      <HeroSlider />
      <Header />

      <div className="section-wrapper">
        {/* Tanıtım başlığı */}
        <div className="intro-section">
          <h1 className="intro-title">BİZ KİMİZ?</h1>
          <p className="intro-description">
            Firmamız, inşaat sektöründe kalite, güven ve sürdürülebilirliği ilke
            edinmiş...
          </p>
          <div className="intro-button-wrapper">
            <PrimaryButton
  text="İncele"
  href="/about"
  style={sharedButtonStyle}
/>

          </div>
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
              description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet..."
              buttonText="Detaylı Bilgi"
              buttonLink="#"
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
              description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet..."
              buttonText="Detaylı Bilgi"
              buttonLink="#"
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
              description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet..."
              buttonText="Detaylı Bilgi"
              buttonLink="#"
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
  style={{
    marginTop: "clamp(40px, 6vh, 100px)",
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
    transition: "background-color 0.3s ease"
  }}
>
  İncele
</Link>


          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
