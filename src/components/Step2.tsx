import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";

type Step2Props = {
  date: Date;
  guests: number;
  setFormStep: Dispatch<SetStateAction<number>>;
};

const generateNextOptions = () => {
  // TODO: generate options for the next 15 minute interval randomly
  const random = Math.random();
};

export const Step2 = ({ date, guests, setFormStep }: Step2Props) => {
  return (
    <div className="w-full min-h-[40px] text-white">
      <div className="py-3 bg-[#00b496]">
        <div className="float-left px-3">
          <button type="button" onClick={() => setFormStep((prev) => prev - 1)}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"
            />
          </button>
        </div>
        <p className="font-fira_sans text-center text-md">
          {date.toLocaleDateString("en-CA", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
          &nbsp;·&nbsp;
          {guests} {guests > 1 ? "Guests" : "Guest"}
          &nbsp;·&nbsp;
          {date.toLocaleTimeString("en-CA", {
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
      </div>
      <div className="py-3 bg-black">
        <p className="font-fira_sans text-2xl text-center">
          Select a time at Sakura Omakase
        </p>
      </div>
      <div className="py-3 bg-black flex">
        <button type="button">Option 1</button>
        <button type="button">Option 2</button>
        <button type="button">Option 3</button>
        <button type="button">Option 4</button>
      </div>
    </div>
  );
};
