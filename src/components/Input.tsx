import { InputHTMLAttributes, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Reservation } from "../types/Reservation";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  reservation: Reservation;
  increment: () => void;
  decrement: () => void;
}

export const Input = ({
  name,
  children,
  reservation,
  increment,
  decrement,
}: InputProps) => {
  return (
    <div className="basis-2/3 w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-1">
        <button onClick={decrement}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"
          />
        </button>
        <div className="flex flex-col justify-center items-center basis-1/3">
          <div>{children}</div>
          <div>{reservation.datetime.getDate()}</div>
          <div>{name}</div>
        </div>
        <button onClick={increment}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"
          />
        </button>
      </div>
    </div>
  );
};
