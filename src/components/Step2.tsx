import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

type Step2Props = {
  date: Date;
  guests: number;
  setFormStep: Dispatch<SetStateAction<number>>;
};

type Option = {
  id: number;
  time: string;
  description: string;
};

export const Step2 = ({ date, guests, setFormStep }: Step2Props) => {
  const [showAccordian, setShowAccordian] = useState<boolean>(false);
  const generateNextOptions = useCallback(() => {
    // TODO: generate options for the next 15 minute interval randomly
    const max = 8;
    const min = 4;
    const round = 1000 * 60 * 15;
    const steps = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    const options: Option[] = [];

    for (let i = 0; i < steps; i++) {
      const nextDate = new Date(date.getTime() + round * i);
      options.push({
        id: i,
        time: nextDate.toLocaleTimeString("en-CA", {
          hour: "numeric",
          minute: "2-digit",
        }),
        description: "À La Carte",
      });
    }
    return options;
  }, [date]);

  const OPTIONS = useMemo(() => generateNextOptions(), [generateNextOptions]);
  return (
    <div className="w-full max-w-[90%] text-white my-4">
      <div className="py-3 bg-[#00b496] min-h-[40px] relative">
        <button
          type="button"
          onClick={() => setFormStep((prev) => prev - 1)}
          className="p-3 absolute top-0 left-0"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"
          />
        </button>
        <p className="font-fira_sans text-center text-[18px]">
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
      <div className="bg-black">
        <p className="font-fira_sans text-2xl text-center bg-[#151616] py-2">
          Select a time at Sakura Omakase
        </p>
        <div className="py-3 grid grid-cols-2 justify-between w-[90%] m-auto">
          {OPTIONS.map(({ id, time, description }: Option) => (
            <button
              key={id}
              type="button"
              className="text-center bg-[#34675d] m-2 hover:brightness-90 hover:text-slate-200 rounded-sm text-[18px] leading-6 py-2"
            >
              <p>{time}</p>
              <p className="opacity-50 text-[16px]">{description}</p>
            </button>
          ))}
        </div>
        <div className="font-fira_sans text-left bg-[#151616] py-3 relative">
          <p className="mx-5 text-[18px]">Other dates with availability</p>
          <button
            type="button"
            onClick={() => setShowAccordian(!showAccordian)}
            className={`p-3 absolute bottom-0 right-0 ${
              showAccordian ? "rotate-180" : ""
            } duration-300`}
          >
            <FontAwesomeIcon
              icon={faChevronUp}
              className="w-5 h-5 xl:w-6 xl:h-6 xxl:w-7 xxl:h-7 xxxl:w-8 xxxl:h-8"
            />
          </button>
        </div>
        {showAccordian && <div className="py-3 bg-slate-200">Other dates</div>}
      </div>
    </div>
  );
};
