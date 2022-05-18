import React, { CSSProperties } from "react";
import { Variant, MEASURES, VARIANTS, COLORS } from "styles/theme";

const defaultVariant = {
  default: {
    cursor: "pointer",
    border: "none",
    'border-radius': MEASURES.radius,
  },
  defaultHover: {
    filter: "brightness(0.95)",
  },
}

interface Props {
  children: React.ReactNode;
  onClick?: (...args: any[]) => void;
  variant?: Variant;
  addStyles?: CSSProperties | undefined;
}

let defaultStyle = Object.entries(defaultVariant.default).map(([key, value]) => `${key}: ${value};`).join(';');
let defaultHoverStyle = Object.entries(defaultVariant.defaultHover).map(([key, value]) => `${key}: ${value};`).join(';')


const Button: React.FC<Props> = ({ children, onClick, variant, addStyles }) => {
  return (
    <button onClick={onClick} style={addStyles} >
      {children}
      <style jsx>{`
        button {
          ${defaultStyle}
          ${(variant && variant && Object.keys(VARIANTS) && !!VARIANTS[variant] && Object.entries(VARIANTS[variant]).map(([key, value]) => `${key}: ${value};`).join(';')) || ''};
          ${!variant ? `border: ${MEASURES.borders} groove ${COLORS.light};` : ''}
        }
        button:hover {
          ${defaultHoverStyle}
        }
      `}</style>
    </button>
  )
}

export default Button