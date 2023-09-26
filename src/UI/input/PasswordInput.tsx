// PasswordInput.tsx
import React from "react";
import BaseInput from "./Index";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, ...rest }) => {
  return <BaseInput label={label} type="password" {...rest} />;
};

export default PasswordInput;
