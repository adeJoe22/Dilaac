import React, {
  ReactNode,
  MouseEventHandler,
  ButtonHTMLAttributes,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  busy?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  busy = false,
  onClick = () => {},
  ...rest
}) => {
  const defaultClassName =
    "shadow-md focus:cursor-pointer transition duration-300";

  return (
    <button
      className={`${defaultClassName} ${className ? className : ""}`}
      disabled={disabled}
      onClick={(e) => !busy && !disabled && onClick(e)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
