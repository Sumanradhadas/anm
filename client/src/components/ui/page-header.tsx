import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
  children?: ReactNode;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  bgColor = "bg-institute-blue", 
  textColor = "text-white",
  children
}: PageHeaderProps) {
  return (
    <section className={`${bgColor} ${textColor} py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className={`text-xl ${textColor === "text-white" ? "text-blue-100" : "opacity-80"}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
