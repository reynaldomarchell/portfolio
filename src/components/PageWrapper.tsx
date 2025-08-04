import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className = "" }: PageWrapperProps) => {
  return (
    <div
      className={`min-h-screen py-4 px-4 sm:py-6 sm:px-6 lg:px-24 font-mono ${className}`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
