import { InputHTMLAttributes, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

export const Input = ({ name, children }: InputProps) => {
  return (
    <div className="basis-1/3 w-full flex justify-center items-center">
      <div className="basis-2/3 flex justify-center items-center">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"
        />
        <div className="flex flex-col justify-center items-center">
          {name}
          {children}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"
        />
      </div>
    </div>
  );
};
