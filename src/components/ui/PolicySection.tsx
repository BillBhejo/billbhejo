import { ReactNode } from "react";

interface PolicySectionProps {
  title: string;
  children: ReactNode;
}

const PolicySection = ({ title, children }: PolicySectionProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default PolicySection;
