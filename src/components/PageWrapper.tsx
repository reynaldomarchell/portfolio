import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className = "" }: PageWrapperProps) => {
  return (
    <div
      className={`min-h-screen py-6 px-6 lg:px-24 pt-24 lg:pt-6 font-mono ${className}`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
