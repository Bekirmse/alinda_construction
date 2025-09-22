import React from "react";
import "./style.css";

type Scheme = "dark" | "gray" | "light" | "gold";

export interface LocationPinProps {
  size?: number;            // px, default 40
  scheme?: Scheme;          // renk paleti
  label?: string;           // isteğe bağlı alt yazı
  className?: string;       // ekstra sınıf
  pulse?: boolean;          // nabız animasyonu
  shadow?: boolean;         // yumuşak gölge
  onClick?: () => void;
}

const SCHEMES: Record<Scheme, { fill: string; stroke: string; dot: string }> = {
  dark: { fill: "#1c1c1c", stroke: "#1c1c1c", dot: "#dfd3a7" },
  gray: { fill: "#b3b3b3", stroke: "#1c1c1c", dot: "#1c1c1c" },
  light:{ fill: "#f2f2f2", stroke: "#1c1c1c", dot: "#1c1c1c" },
  gold: { fill: "#dfd3a7", stroke: "#1c1c1c", dot: "#1c1c1c" },
};

const LocationPin: React.FC<LocationPinProps> = ({
  size = 40,
  scheme = "gold",
  label,
  className = "",
  pulse = false,
  shadow = true,
  onClick,
}) => {
  const { fill, stroke, dot } = SCHEMES[scheme];
  const px = `${size}px`;

  return (
    <div
      className={[
        "alinda-pin",
        shadow ? "alinda-pin--shadow" : "",
        pulse ? "alinda-pin--pulse" : "",
        className,
      ].join(" ").trim()}
      style={{ width: px }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      aria-label={label ?? "Konum pini"}
    >
      <svg
        className="alinda-pin__svg"
        width={size}
        height={size * 1.4}
        viewBox="0 0 64 90"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* dış çizgi */}
        <path
          d="M32 87C32 87 58 57 58 36C58 19.431 45.569 7 29 7S0 19.431 0 36c0 21 32 51 32 51Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="3"
          shapeRendering="geometricPrecision"
        />
        {/* iç daire */}
        <circle cx="29" cy="33" r="11" fill={dot} stroke={stroke} strokeWidth="2"/>
        {/* vurgulu highlight */}
        <path
          d="M12 25c2-6 8-10 16-10"
          stroke="#ffffff"
          strokeOpacity="0.25"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {label && <div className="alinda-pin__label">{label}</div>}
    </div>
  );
};

export default LocationPin;
