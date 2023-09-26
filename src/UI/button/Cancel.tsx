import React, { ReactNode } from "react";
import Button from "./index";

interface CancelButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ children, onClick }) => {
  const defaultClassName = "border-red-600 bg-red-500";

  return (
    <Button
      className={`${defaultClassName} px-8 py-2 rounded-lg`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CancelButton;
