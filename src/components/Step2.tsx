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
  const max = 8;
  const min = 4;
  const round = 1000 * 60 * 15;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("random: " + random);
  return [];
};

const OPTIONS = generateNextOptions();

export const Step2 = ({ date, guests, setFormStep }: Step2Props) => {
  return (
    <div className="w-full max-w-[90%] text-white my-4">
      <div className="py-3 bg-[#00b496] min-h-[40px]">
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
        <div className="py-3 grid grid-cols-2 justify-between w-[95%] m-auto">
          {OPTIONS.map(({ time, description }) => (
            <button
              type="button"
              className="text-center bg-[#34675d] m-2 hover:text-slate-300 rounded-sm text-[18px] leading-5 py-2"
            >
              <p>{time}</p>
              <p>{description}</p>
            </button>
          ))}
          <button
            type="button"
            className="text-center bg-[#34675d] m-2 hover:brightness-90 rounded-sm text-[18px] leading-5 py-2"
          >
            <p>5:00pm</p>
            <p>À La Carte</p>
          </button>
          <button
            type="button"
            className="text-center bg-[#34675d] m-2 hover:brightness-90 rounded-sm text-[18px] leading-5 py-2"
          >
            <p>5:15pm</p>
            <p>À La Carte</p>
          </button>
          <button
            type="button"
            className="text-center bg-[#34675d] m-2 hover:brightness-90 rounded-sm text-[18px] leading-5 py-2"
          >
            <p>5:30pm</p>
            <p>À La Carte</p>
          </button>
          <button
            type="button"
            className="text-center bg-[#34675d] m-2 hover:brightness-90 rounded-sm text-[18px] leading-5 py-2"
          >
            <p>5:45pm</p>
            <p>À La Carte</p>
          </button>
        </div>
      </div>
    </div>
  );
};
