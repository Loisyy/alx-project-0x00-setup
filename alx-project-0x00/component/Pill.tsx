import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
      {title}
    </span>
  );
};

export default Pill;
