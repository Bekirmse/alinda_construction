import React from "react";
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
    <div className="hero-overlay">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-desc">{description}</p>
      <PrimaryButton
        text={buttonText}
        href={buttonLink}
        style={{ position: "absolute", bottom: "94px", left: "224px" }}
      />
    </div>
  );
};

export default SlideContent;
