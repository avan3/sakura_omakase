import { InputHTMLAttributes, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  increment: () => void;
  decrement: () => void;
  disableDecrement: boolean;
  disableIncrement?: boolean;
}

export const Input = ({
  children,
  increment,
  decrement,
  disableDecrement,
  disableIncrement,
}: InputProps) => {
  return (
    <div className="basis-2/3 w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-1">
        <button
          className="disabled:opacity-25"
          onClick={decrement}
          disabled={disableDecrement}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"
          />
        </button>
        <div className="flex flex-col justify-center items-center basis-1/3">
          {children}
        </div>
        <button
          className="disabled:opacity-25"
          onClick={increment}
          disabled={disableIncrement}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"
          />
        </button>
      </div>
    </div>
  );
};
