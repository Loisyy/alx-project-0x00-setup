import Card from "@/components /Card"
import Button from "@/components /button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralarge">Landing page</h1>
            <Card />
             <h1 className="text-3xl font-bold">Button Component Demo</h1>

      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button title="Small Sm" size="small" shape="rounded-sm" />
        <Button title="Small Md" size="small" shape="rounded-md" />
        <Button title="Small Full" size="small" shape="rounded-full" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button title="Medium Sm" size="medium" shape="rounded-sm" />
        <Button title="Medium Md" size="medium" shape="rounded-md" />
        <Button title="Medium Full" size="medium" shape="rounded-full" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large Sm" size="large" shape="rounded-sm" />
        <Button title="Large Md" size="large" shape="rounded-md" />
        <Button title="Large Full" size="large" shape="rounded-full" />
      </div>
        </div>
    )
}

export default Landing; 