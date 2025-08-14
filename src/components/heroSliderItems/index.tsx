import React from "react";
import { Row, Col } from "antd";
import PrimaryButton from "../primaryButton";
import "./style.css";

interface SlideContentProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const SlideContent: React.FC<SlideContentProps> = ({
  title,
  description,
  buttonText = "PROJE DETAY",
  buttonLink = "#",
}) => {
  return (
    <div className="page-container">
      <div className="hero-overlay">
        <Row justify="start" style={{ width: "100%" }}>
          <Col
            xs={24}
            sm={20}
            md={16}
            lg={12}
            xl={10}
            style={{ width: "100%" }}
          >
            <h1 className="hero-title">{title}</h1>
          </Col>
        </Row>
        <Row justify="start" style={{ width: "100%" }}>
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <div style={{ width: "100%" }}>
              <p className="hero-desc">{description}</p>
            </div>
          </Col>
        </Row>

        <Row justify="start">
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <PrimaryButton
              text={buttonText}
              href={buttonLink}
              className="hero-button"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SlideContent;
