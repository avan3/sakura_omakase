import { Dispatch, SetStateAction, useCallback } from "react";
import { Input } from "./Input";
import { useForm } from "react-hook-form";

type Step1Props = {
  currentDateTime: Date;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  guests: number;
  setGuests: Dispatch<SetStateAction<number>>;
  setFormStep: Dispatch<SetStateAction<number>>;
};

export const Step1 = ({
  currentDateTime,
  date,
  setDate,
  guests,
  setGuests,
  setFormStep,
}: Step1Props) => {
  const { watch, setValue } = useForm({ defaultValues: { date, guests } });

  // Increment or decrement date
  const addDays = useCallback(
    (date: Date, number: number) => {
      if (date.getDate() < currentDateTime.getDate()) {
        return currentDateTime;
      }
      const newDate = new Date(date);
      return new Date(newDate.setDate(newDate.getDate() + number));
    },
    [currentDateTime]
  );

  const incrementDate = useCallback(() => {
    setDate((prev) => {
      const newDate = addDays(prev, 1);
      setValue("date", newDate);
      return newDate;
    });
  }, [addDays, setValue, setDate]);

  const decrementDate = useCallback(() => {
    setDate((prev) => {
      const newDate = addDays(prev, -1);
      setValue("date", newDate);
      return newDate;
    });
  }, [addDays, setValue, setDate]);

  // Increment or decrement time
  const addTime = useCallback(
    (date: Date, number: number) => {
      if (date.getTime() < currentDateTime.getTime()) {
        return currentDateTime;
      }
      const newDate = new Date(date);
      return new Date(newDate.setMinutes(newDate.getMinutes() + number));
    },
    [currentDateTime]
  );

  const incrementTime = useCallback(() => {
    setDate((prev) => {
      const newDate = addTime(prev, 15);
      setValue("date", newDate);
      return newDate;
    });
  }, [addTime, setValue, setDate]);

  const decrementTime = useCallback(() => {
    setDate((prev) => {
      const newDate = addTime(prev, -15);
      setValue("date", newDate);
      return newDate;
    });
  }, [addTime, setValue, setDate]);

  // Increment or decrement guests
  function addGuests(guests: number, number: number) {
    if (guests < 1) {
      return guests;
    }
    return guests + number;
  }
  return (
    <>
      {/* Increment or decrement by 1 day */}
      <Input
        increment={incrementDate}
        decrement={decrementDate}
        disableDecrement={date.getDate() <= currentDateTime.getDate()}
      >
        <div>{`${date.toLocaleString("en-CA", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}`}</div>
        <div className="opacity-25">Date</div>
      </Input>
      {/* Increment or decrement by 15 minutes */}
      <Input
        increment={incrementTime}
        decrement={decrementTime}
        disableDecrement={date.getTime() <= currentDateTime.getTime()}
      >
        {`${date.toLocaleString("en-CA", {
          hour: "numeric",
          minute: "numeric",
        })}`}
        <div className="opacity-25">Time</div>
      </Input>
      {/* Increment or decrement by 1 guest */}
      <Input
        name="guest"
        increment={() =>
          setGuests((prev) => {
            const newGuests = addGuests(prev, 1);
            setValue("guests", newGuests);
            return newGuests;
          })
        }
        decrement={() =>
          setGuests((prev) => {
            const newGuests = addGuests(prev, -1);
            setValue("guests", newGuests);
            return newGuests;
          })
        }
        disableDecrement={guests <= 1}
      >
        {guests}
        <div className="opacity-25">{guests > 1 ? "Guests" : "Guest"}</div>
      </Input>
      <div className="basis-2/3 w-full flex justify-center items-center">
        <div className="flex justify-center items-center flex-1">
          <button
            className={`font-fira_sans font-medium bg-black hover:opacity-25
                cursor-pointer text-[17px] xl:text-[21px] xxl:text-[25px] xxxl:text-[30px] 
                text-secondary w-2/3 py-2 my-3`}
            type="button"
            onClick={() => setFormStep((prev) => prev + 1)}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};
