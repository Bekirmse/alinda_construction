import React, { useState } from "react";
import { Row, Col } from "antd";
import "./style.css";

interface StatBox {
  label: string;
  value: string;
  icon?: string;
}

interface ProjectCardProps {
  image: string; // ✅ Üstte görünen tek resim
  gallery?: string[]; // ✅ Footer üstündeki slider için çoklu resim
  title?: string;
  stats?: [StatBox, StatBox];
  location?: string;
  completionDate?: string;
  price?: string;
  features?: string[];
  roomTypes?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  gallery = [],
  title,
  stats,
  location,
  completionDate,
  price,
  features,
  roomTypes,
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="project-wrapper">
      {/* ÜSTTE TEK GÖRSEL */}
      <div className="project-top-image-wrapper">
        <img src={image} alt="Proje Detay" className="project-top-image" />
        {title && <h2 className="project-overlay-title">{title}</h2>}
      </div>

      {/* PROJE DETAY BLOĞU */}
      <div className="project-white-block">
        {stats && (
          <div className="project-stats-container">
            {stats.map((s, i) => (
              <div className="project-stat-box" key={i}>
                {s.icon && (
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="project-stat-icon"
                  />
                )}
                <div className="project-stat-label">{s.label}</div>
                <div className="project-stat-value">{s.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="project-grid-content">
          <Row gutter={[0, 32]}>
            <Col xs={24} md={8}>
              <div className="project-column-block project-column-left">
                <h4>KONUM</h4>
                <p>{location}</p>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <div className="project-column-block project-column-center">
                <h4>PROJE ÖZELLİKLERİ</h4>
                <ul>
                  {features?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <div className="project-column-block project-column-right">
                <h4>KONUT TİPLERİ</h4>
                <ul>
                  {roomTypes?.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        {/* 360 GELDIGINDE BURAYI YORU MSATIRINDAN KALDIR */}
        {/* <div className="project-divider" /> */}

        {/* <div className="project-virtual-tour">
          <div className="project-virtual-title">360° SANAL TUR</div>
          <div className="project-virtual-subtitle">
            PROJEYİ 360° PANORAMİK TUR İLE İNCELEYİN, D-POINT’İN ÇAĞDAŞ YAŞAM
            ALANLARINI YAKINDAN KEŞFEDİN.
          </div>
          <button className="project-virtual-button">
            ALİNDA 8 360° SANAL TURU GÖRÜNTÜLE
          </button>
          <div className="project-virtual-note">
            NOT: SANAL TUR YENİ BİR SEKMEDE AÇILACAKTIR.
          </div>
        </div> */}

        <div className="project-divider-bottom" />
      </div>

      {/* FOOTER ÜSTÜNDEKİ SLIDER */}
      {gallery.length > 0 && (
        <div className="project-slider-section">
          <button
            className="slider-arrow left"
            aria-label="Önceki"
            type="button"
            onClick={prevSlide}
          ></button>

          <img
            src={gallery[current]}
            alt={`Slide ${current + 1}`}
            className="project-slider-image"
          />

          <button
            className="slider-arrow right"
            aria-label="Sonraki"
            type="button"
            onClick={nextSlide}
          ></button>
        </div>
      )}

      <div className="project-bottom-white" />
    </section>
  );
};

export default ProjectCard;
