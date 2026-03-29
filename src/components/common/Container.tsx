import React from "react";
import { cn } from "../../utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("container mx-auto px-6", className)}>
      {children}
    </div>
  );
};

export default Container;