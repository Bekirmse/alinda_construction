import React from "react";
import { Button, ButtonProps } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

interface PrimaryButtonProps extends ButtonProps {
  text: string;
  to?: string;   // İç sayfa yönlendirme
  href?: string; // Dış link
  className?: string;
  style?: React.CSSProperties;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  to,
  href,
  className,
  style,
  ...rest
}) => {
  // Eğer to varsa → React Router Link'i direkt AntD Button gibi göster
  if (to) {
    return (
      <Link to={to} className={`primary-button-link ${className ?? ""}`} style={style}>
        {text}
      </Link>
    );
  }

  // Eğer href varsa → klasik anchor
  if (href) {
    return (
      <a
        href={href}
        className={`primary-button-link ${className ?? ""}`}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  // Normal AntD Button
  return (
    <Button className={`primary-button ${className ?? ""}`} style={style} {...rest}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
