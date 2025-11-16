const Pill: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="px-2 py-1 bg-gray-200 rounded-full text-sm font-medium">
      {title}
    </div>
  );
};

export default Pill;
