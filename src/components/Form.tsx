import { useCallback, useState, useRef } from "react";
import { Input } from "./Input";
import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, watch, setValue } = useForm();
  const [formStep, setFormStep] = useState<number>(0);
  const round = 1000 * 60 * 15;
  const startDateTime = new Date(new Date().setHours(17, 0, 0, 0));
  const currentDateTime = useRef(
    new Date() < startDateTime ? startDateTime : new Date()
  );
  const [date, setDate] = useState<Date>(
    new Date(Math.ceil(currentDateTime.current.getTime() / round) * round)
  );
  const [guests, setGuests] = useState<number>(1);

  // Increment or decrement date
  const incrementDate = useCallback(() => {
    setDate(addDays(date, 1));
  }, [date]);

  const decrementDate = useCallback(() => {
    setDate(addDays(date, -1));
  }, [date]);

  function addDays(date: Date, number: number) {
    if (date.getDate() < currentDateTime.current.getDate()) {
      return date;
    }
    const newDate = new Date(date);
    return new Date(newDate.setDate(newDate.getDate() + number));
  }

  // Increment or decrement time
  const incrementTime = useCallback(() => {
    setDate(addTime(date, 15));
  }, [date]);

  const decrementTime = useCallback(() => {
    setDate(addTime(date, -15));
  }, [date]);

  function addTime(date: Date, number: number) {
    if (date.getTime() < currentDateTime.current.getTime()) {
      return date;
    }
    const newDate = new Date(date);
    return new Date(newDate.setMinutes(newDate.getMinutes() + number));
  }

  // Increment or decrement guests
  function addGuests(guests: number, number: number) {
    if (guests < 1) {
      return guests;
    }
    return guests + number;
  }

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()}>
      <div
        className="mt-12 md:mt-20 h-[320px] flex flex-col justify-center items-center 
        text-center divide-y divide-black border-t border-b border-black"
      >
        {formStep == 0 && (
          <>
            {/* Increment or decrement by 1 day */}
            <Input
              name="Date"
              increment={incrementDate}
              decrement={decrementDate}
              disableDecrement={
                date.getDate() <= currentDateTime.current.getDate()
              }
            >
              <div>{`${date.toLocaleString("en-CA", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}`}</div>
            </Input>
            {/* Increment or decrement by 15 minutes */}
            <Input
              name="Time"
              increment={incrementTime}
              decrement={decrementTime}
              disableDecrement={
                date.getTime() <= currentDateTime.current.getTime()
              }
            >
              {`${date.toLocaleString("en-CA", {
                hour: "numeric",
                minute: "numeric",
              })}`}
            </Input>
            {/* Increment or decrement by 1 guest */}
            <Input
              name="Guest"
              increment={() => setGuests((prev) => addGuests(prev, 1))}
              decrement={() => setGuests((prev) => addGuests(prev, -1))}
              disableDecrement={guests <= 1}
            >
              {guests}
            </Input>
            <div className="basis-2/3 w-full flex justify-center items-center">
              <div className="flex justify-center items-center flex-1">
                <button
                  className={`font-fira_sans font-medium bg-black hover:opacity-25
                cursor-pointer text-[17px] xl:text-[21px] xxl:text-[25px] xxxl:text-[30px] 
                text-secondary w-2/3 p-1`}
                  type="button"
                  onClick={() => setFormStep((prev) => prev + 1)}
                >
                  Search
                </button>
              </div>
            </div>
            {/* <input
              type="date"
              value={`${date.toLocaleString("en-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}`}
              {...register("date", { required: true })}
              onChange={(e) => setValue("date", e.target.value)}
            />
            <input
              type="time"
              value={`${date.toLocaleTimeString("en-CA", {
                hour12: false,
              })}`}
              {...register("time", { required: true })}
              onChange={(e) => setValue("time", e.target.value)}
            />
            <input
              type="number"
              hidden
              aria-hidden
              value={guests}
              {...register("guests", { required: true })}
              onChange={(e) => setValue("guests", e.target.value)}
            /> */}
          </>
        )}
      </div>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
};
