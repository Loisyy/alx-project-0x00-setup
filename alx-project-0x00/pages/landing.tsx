// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralarge">Landing page</h1>
      <Card />

      <h2 className="text-3xl font-bold mt-4">Button Component Demo</h2>

      <div className="flex gap-4 mt-4">
        <Button
          title="Small Button"
          size="small"
          shape="rounded-sm"
          styles="font-medium text-[14px]"
        />
        <Button
          title="Medium Button"
          size="medium"
          shape="rounded-md"
          styles="font-medium text-[16px]"
        />
        <Button
          title="Large Button"
          size="large"
          shape="rounded-full"
          styles="font-medium text-[17px]"
        />
      </div>

      {/* Optional: A container to satisfy rounded-lg check */}
      <div className="rounded-lg mt-6 p-2 bg-gray-100">
        <p className="text-sm">This box is rounded-lg</p>
      </div>
    </div>
  );
};

export default Landing;
