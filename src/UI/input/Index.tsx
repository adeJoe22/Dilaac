import React, { InputHTMLAttributes, ChangeEvent } from "react";

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  onInputChange,
  ...rest
}) => {
  return (
    <div className="flex flex-col mb-[20px]">
      {label && <label className="font-semibold">{label}</label>}
      <input
        className=" p-2 rounded bg-[#feecd0] outline-none"
        {...rest}
        onChange={(e) => {
          if (onInputChange) {
            onInputChange(e);
          }
        }}
      />
    </div>
  );
};

export default BaseInput;
