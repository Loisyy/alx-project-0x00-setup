import Card from "@/components/Card";
import Button from "@/components/Button";


const Landing: React.FC = () => {
  return (
    <div className="p-6">

      <h1 className="text-xl font-bold">Landing Page</h1>
      <Card />

      <h1 className="text-3xl font-bold mt-6">Button Component Demo</h1>

      <Button
        title="Small"
        size="small"
        shape="rounded-sm"
        className="mt-3"
      />

      <Button
        title="Medium"
        size="medium"
        shape="rounded-md"
        className="mt-3"
      />

      <Button
        title="Large"
        size="large"
        shape="rounded-full"
        className="mt-3"
      />

    </div>
  );
};

export default Landing;
