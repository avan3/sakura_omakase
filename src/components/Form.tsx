import { useCallback, useState, useRef } from "react";
import { Input } from "./Input";

export const Form = () => {
  const round = 1000 * 60 * 15;
  const startDateTime = new Date(new Date().setHours(17, 0, 0, 0));
  const currentDateTime = useRef(
    new Date() < startDateTime ? startDateTime : new Date()
  );
  const [date, setDate] = useState<Date>(
    new Date(Math.ceil(currentDateTime.current.getTime() / round) * round)
  );
  const [guests, setGuests] = useState<number>(1);
  const [disableIncrement, setDisableIncrement] = useState<boolean>(false);
  const [disableDecrement, setDisableDecrement] = useState<boolean>(false);

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
    <div
      className="mt-12 md:mt-20 h-[320px] flex flex-col justify-center items-center 
    text-center divide-y divide-black border-t border-b border-black"
    >
      {/* Increment or decrement by 1 day */}
      <Input name="Date" increment={incrementDate} decrement={decrementDate}>
        <div>{`${date.toLocaleString("en-us", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}`}</div>
      </Input>
      {/* Increment or decrement by 15 minutes */}
      <Input name="Time" increment={incrementTime} decrement={decrementTime}>
        {`${date.toLocaleString("en-us", {
          hour: "numeric",
          minute: "numeric",
        })}`}
      </Input>
      {/* Increment or decrement by 1 guest */}
      <Input
        name="Guest"
        increment={() => setGuests((prev) => addGuests(prev, 1))}
        decrement={() => setGuests((prev) => addGuests(prev, -1))}
      >
        {guests}
      </Input>
    </div>
  );
};
