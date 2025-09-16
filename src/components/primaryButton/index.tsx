import React from "react";
import { Button, ButtonProps } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

interface PrimaryButtonProps extends Omit<ButtonProps, "type"> {
  text: string;
  to?: string; // İç sayfa yönlendirme
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
  // İç sayfa yönlendirme (React Router Link)
  if (to) {
    return (
      <Link
        to={to}
        className={`primary-button-link ${className ?? ""}`}
        style={style}
      >
        {text}
      </Link>
    );
  }

  // Dış link (anchor)
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
    <Button
      {...rest}
      className={`primary-button ${className ?? ""}`}
      style={style}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
