import React from "react";
import Header from "../../components/header";
import HeroSlider from "../../components/heroSlider";
import ProjectInfo from "../../components/projectInfo";
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
          Firmamız, inşaat sektöründe kalite, güven ve sürdürülebilirliği ilke edinmiş,
          deneyimli bir ekip tarafından kurulmuştur. Kuruluşumuzdan bu yana, yaşam alanlarını
          sadece beton ve tuğladan ibaret görmeyip; estetik, fonksiyonellik ve konforu bir
          arada sunmayı hedefledik. Her projede, kullanıcı ihtiyaçlarını gözeten, modern mimariyle
          uyumlu, sağlam ve güvenli yapılar inşa ediyoruz. Konut, apartman, site ve ticari yapı
          projelerinde edindiğimiz tecrübeyle, planlama aşamasından anahtar teslimine kadar tüm
          süreçleri titizlikle yürütüyor; müşteri memnuniyetini en ön planda tutuyoruz. Gelişen
          teknolojiyi ve sektörel yenilikleri yakından takip ederek, projelerimizde çağdaş
          çözümler sunuyoruz. Yalnızca bugünü değil, geleceği de inşa ettiğimizin bilinciyle
          hareket ediyor; şehir dokusuna değer katacak projeler üretmeye devam ediyoruz.
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

        {/* 1. Satır: Sol Resim - Sağ Text */}
        <Row className="project-row" justify="center" align="middle">
          <Col>
            <img src={proje3} alt="Proje 3" className="project-image" />
          </Col>
          <Col>
            <ProjectInfo
              title="Proje 1"
              description="Proje 1 açıklaması buraya gelecek.Proje 1 açıklaması buraya gelecek.Proje 1 açıklaması buraya gelecek.Proje 1 açıklaması buraya gelecek.Proje 1 açıklaması buraya gelecek.Proje 1 açıklaması buraya gelecek.Proje 1 açıklaması buraya gelecek.Proje 1 açıklaması buraya gelecek.Proje 1 açıklaması buraya gelecek.Proje 1 açıklaması buraya gelecek."
              buttonText="Detaylı Bilgi"
              buttonLink="#"
            />
          </Col>
        </Row>

        {/* 2. Satır: Sağ Resim - Sol Text */}
        <Row className="project-row" justify="center" align="middle">
          <Col>
            <ProjectInfo
              title="Proje 2"
              description="Proje 2 açıklaması buraya gelecek.Proje 2 açıklaması buraya gelecek.Proje 2 açıklaması buraya gelecek.Proje 2 açıklaması buraya gelecek.Proje 2 açıklaması buraya gelecek.Proje 2 açıklaması buraya gelecek.Proje 2 açıklaması buraya gelecek.Proje 2 açıklaması buraya gelecek.Proje 2 açıklaması buraya gelecek.Proje 2 açıklaması buraya gelecek."
              buttonText="Detaylı Bilgi"
              buttonLink="#"
            />
          </Col>
          <Col>
            <img src={proje4} alt="Proje 4" className="project-image" />
          </Col>
        </Row>

        {/* 3. Satır: Sol Resim - Sağ Text */}
        <Row className="project-row" justify="center" align="middle">
          <Col>
            <img src={proje5} alt="Proje 5" className="project-image" />
          </Col>
          <Col>
            <ProjectInfo
              title="Proje 3"
              description="Proje 3 açıklaması buraya gelecek.Proje 3 açıklaması buraya gelecek.Proje 3 açıklaması buraya gelecek.Proje 3 açıklaması buraya gelecek.Proje 3 açıklaması buraya gelecek.Proje 3 açıklaması buraya gelecek.Proje 3 açıklaması buraya gelecek.Proje 3 açıklaması buraya gelecek.Proje 3 açıklaması buraya gelecek.Proje 3 açıklaması buraya gelecek."
              buttonText="Detaylı Bilgi"
              buttonLink="#"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
