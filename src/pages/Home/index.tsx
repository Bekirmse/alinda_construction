import React from "react";
import Header from "../../components/header";
import HeroSlider from "../../components/heroSlider";
import ProjectInfo from "../../components/projectInfo";
import Footer from "../../components/footer"; // ✅ Footer importu eklendi
import { Row, Col } from "antd";
import "./style.css";

import proje3 from "../../assets/projects/proje3.png";
import proje4 from "../../assets/projects/proje4.png";
import proje5 from "../../assets/projects/proje5.png";
import PrimaryButton from "../../components/primaryButton";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <HeroSlider />
      <Header />
      <div className="section-wrapper">
        <h1 className="intro-title">BİZ KİMİZ?</h1>
        <p className="intro-description">
          {/* Açıklama metni */}
          Firmamız, inşaat sektöründe kalite, güven ve sürdürülebilirliği ilke
          edinmiş...
        </p>
        <div className="intro-button-wrapper">
          <PrimaryButton
            text="İncele"
            href="#"
            style={{
              width: "191px",
              height: "60px",
              fontSize: "24px",
              fontWeight: 300,
              backgroundColor: "black",
              color: "white",
            }}
          />
        </div>

        <div className="custom-section">
          <p className="custom-text">PROJELERİMİZ</p>
        </div>

        {/* Projeler sıralaması */}
        <Row className="project-row" justify="center" align="middle">
          <Col>
            <img src={proje3} alt="Proje 3" className="project-image" />
          </Col>
          <Col>
            <ProjectInfo
              title="Proje 1"
              description="
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, "
              buttonText="Detaylı Bilgi"
              buttonLink="#"
            />
          </Col>
        </Row>

        <Row className="project-row" justify="center" align="middle">
          <Col>
            <ProjectInfo
              title="Proje 2"
              description="
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, "
              buttonText="Detaylı Bilgi"
              buttonLink="#"
            />
          </Col>
          <Col>
            <img src={proje4} alt="Proje 4" className="project-image" />
          </Col>
        </Row>

        <Row className="project-row" justify="center" align="middle">
          <Col>
            <img src={proje5} alt="Proje 5" className="project-image" />
          </Col>
          <Col>
            <ProjectInfo
              title="Proje 3"
              description="
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, 
Lorem ipsum dolor sit amet, "
              buttonText="Detaylı Bilgi"
              buttonLink="#"
            />
          </Col>
        </Row>
        <div className="bottom-gap-placeholder" />
      </div>

      {/* ✅ Footer burada çağrılıyor */}
      <Footer />
    </div>
  );
};

export default Home;
