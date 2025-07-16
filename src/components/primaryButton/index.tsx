import React from "react";
import { Button, ButtonProps } from "antd";
import "./style.css";

interface PrimaryButtonProps extends ButtonProps {
  text: string;
  href?: string;
  style?: React.CSSProperties;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, href, style, ...rest }) => {
  const button = (
    <Button className="primary-button" style={style} {...rest}>
      {text}
    </Button>
  );

  return href ? <a href={href}>{button}</a> : button;
};

export default PrimaryButton;
