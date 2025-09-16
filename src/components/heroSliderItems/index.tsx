import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

interface SlideContentProps {
  title: string;
  description: string;
  buttonText?: string;
  slug?: string; // örn: "proje-1"
}

const SlideContent: React.FC<SlideContentProps> = ({
  title,
  description,
  buttonText = "PROJE DETAY",
  slug,
}) => {
  return (
    <div className="page-container">
      <div className="hero-overlay">
        <Row justify="start" style={{ width: "100%" }}>
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <h1 className="hero-title">{title}</h1>
          </Col>
        </Row>

        <Row justify="start">
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Link
              to={slug ? `/projeler#${slug}` : "/projeler"}
              className="hero-button"
            >
              {buttonText ?? "PROJE DETAY"}
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SlideContent;
