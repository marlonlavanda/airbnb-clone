"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onCLick: () => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onCLick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline
          ? "bg-white border-black text-black"
          : " bg-rose-500 border-rose-500 text-white"
      } ${
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-2"
      }`}
      onClick={onCLick}
      disabled={disabled}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
