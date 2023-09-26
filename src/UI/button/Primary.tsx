import React, { ReactNode } from "react";
import Button from "./index";

interface PrimaryButtonProps {
  children: ReactNode;
  busy?: boolean;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  busy = false,
  disabled = false,
  ...rest
}) => {
  const defaultClassName = " bg-[#FF6C02] w-full";
  const disabledClassName = "bg-gray-300 text-gray-500 cursor-not-allowed";
  const busyClassName = "bg-[#FF6C02] opacity-70 cursor-not-allowed";

  return (
    <Button
      className={`${
        busy ? busyClassName : disabled ? disabledClassName : defaultClassName
      } px-8 py-2  rounded text-white font-semibold mt-4`}
      disabled={disabled}
      {...rest}
      type="submit"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
