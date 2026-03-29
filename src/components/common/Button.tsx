import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

// Defining a 'Type' to tell the computer what are the valid inputs for this Button
type ButtonProps = {
  children: ReactNode; // The text or icon inside the button
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all active:scale-95",
        className,
      )}
    >
      {children}
    </button>
  );
};
export default Button;
