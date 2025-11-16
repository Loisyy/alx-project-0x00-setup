// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralarge">Landing page</h1>
      <Card />
      <h1 className="text-3xl font-bold mt-4">Button Component Demo</h1>

      <Button
        title="Get Started"
        size="large"
        shape="rounded-full"
        styles="font-medium text-[17px] ml-2"
      />
      <Button
        title="Learn More"
        size="medium"
        shape="rounded-md"
        styles="font-medium text-[17px]"
      />
      <Button
        title="Subscribe"
        size="small"
        shape="rounded-sm"
        styles="font-medium text-[14px]"
      />
    </div>
  );
};

export default Landing;
