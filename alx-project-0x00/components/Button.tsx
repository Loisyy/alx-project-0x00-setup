import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape, styles }) => {
  const sizeClass = size === "small" ? "px-3 py-1 text-sm" :
                    size === "medium" ? "px-4 py-2 text-base" :
                    "px-6 py-3 text-lg"; // large

  const combinedStyles = `${sizeClass} ${shape} ${styles} bg-blue-500 text-white hover:bg-blue-600 transition`;

  return <button className={combinedStyles}>{title}</button>;
};

export default Button;
