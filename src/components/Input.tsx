import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

export const Input = ({ name, children }: InputProps) => {
  return (
    <div className="basis-1/3 w-full">
      {name}
      {children}
    </div>
  );
};
