import React from "react";

// Interface INSIDE this file
interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {

  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${shape}
        font-medium bg-blue-500 text-white
        ${className}
      `}
    >
      {title}
    </button>
  );
};

export default Button;
