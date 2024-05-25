"use client";

import React from "react";
import Link from "next/link";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

interface ButtonProps {
  children: React.ReactNode;
  buttonStyle?: string;
  buttonSize?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  margin?: string;
  href?: string;
  variant?: 'default' | 'search';
  fontType?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonStyle,
  buttonSize,
  width,
  height,
  backgroundColor,
  textColor,
  borderColor,
  margin,
  href,
  variant = 'default',
  fontType,
  onClick,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle || "") ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize || "") ? buttonSize : SIZES[0];

  const baseStyles = "rounded-full outline-none drop-shadow-lg border-none cursor-pointer transition-all duration-300 ease-out";
  const variantStyles = variant === 'search'
    ? "bg-primary text-black border-primary hover:bg-white hover:text-gray-900"
    : `bg-${backgroundColor || 'primary'} text-${textColor || 'gray-900'} border-${borderColor || 'primary'} hover:bg-white hover:text-gray-900`;
  const sizeClasses = checkButtonSize === "btn--medium" ? "text-xs" : "text-lg";

  const customStyles = { width, height, margin };
  const buttonClassNames = `${baseStyles} ${variantStyles} ${sizeClasses} ${fontType || ''}`;

  if (href) {
    return (
      <Link href={href} passHref>
        <button className={buttonClassNames} onClick={onClick} style={customStyles}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={buttonClassNames} onClick={onClick} style={customStyles}>
      {children}
    </button>
  );
};

export default Button;
