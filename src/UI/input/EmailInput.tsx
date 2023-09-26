// TextInput.tsx
import React from "react";
import BaseInput from "./Index";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<TextInputProps> = ({ label, ...rest }) => {
  return <BaseInput label={label} type="email" {...rest} />;
};

export default EmailInput;
