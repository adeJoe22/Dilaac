// TextInput.tsx
import React from "react";
import BaseInput from "./Index";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, ...rest }) => {
  return <BaseInput label={label} type="text" {...rest} />;
};

export default TextInput;
