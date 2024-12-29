import { LucideIcon } from "lucide-react";

interface PolicyHeaderProps {
  icon: LucideIcon;
  title: string;
}

const PolicyHeader = ({ icon: Icon, title }: PolicyHeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <Icon className="w-12 h-12 text-blue-600" />
      </div>
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        {title}
      </h1>
    </>
  );
};

export default PolicyHeader;
