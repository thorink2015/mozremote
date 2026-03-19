import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

export const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => {
  return (
    <div className={`min-h-screen flex items-center justify-center px-6 md:px-16 py-20 md:py-12 ${className}`}>
      <div className="max-w-4xl w-full">
        {children}
      </div>
    </div>
  );
};
