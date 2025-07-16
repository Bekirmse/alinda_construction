// components/ProjectInfo.tsx
import React from "react";

import "./style.css";
import PrimaryButton from "../primaryButton";

interface ProjectInfoProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  title,
  description,
  buttonText = "İNCELE",
  buttonLink = "#",
}) => {
  return (
    <div className="project-info-container">
      <h3 className="project-info-title">{title}</h3>
      <p className="project-info-description">{description}</p>
      <div className="project-info-button-wrapper">
        <PrimaryButton
          text={buttonText}
          href={buttonLink}
          style={{
            width: "191px",
            height: "60px",
            fontSize: "24px",
            fontWeight: 400,
            backgroundColor: "black",
            color: "white"
          }}
          
        />
      </div>
    </div>
  );
};

export default ProjectInfo;
