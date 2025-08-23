import React from "react";
import "./style.css";
import PrimaryButton from "../primaryButton";

interface ProjectInfoProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  buttonClassName?: string; // ✅ className prop'u eklendi
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  title,
  description,
  buttonText = "İNCELE",
  buttonLink = "#",
  buttonClassName = "project-detail-button", // ✅ default class
}) => {
  return (
    <div className="project-info-container">
      <h3 className="project-info-title">{title}</h3>
      <p className="project-info-description">{description}</p>
      <div className="project-info-button-wrapper">
        <PrimaryButton
          text={buttonText}
          to={buttonLink}
          className={buttonClassName} // ✅ className kullanıldı
        />
      </div>
    </div>
  );
};

export default ProjectInfo;
