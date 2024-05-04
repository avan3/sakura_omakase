import { useCallback, useState } from "react";
import { Input } from "./Input";
import { Reservation } from "../types/Reservation";

export const Form = () => {
  const [reservation, setReservation] = useState<Reservation>({
    datetime: new Date(),
    guest: 1,
  });

  const incrementDate = useCallback(() => {
    setReservation((prev: Reservation) => {
      console.log("prev:", prev.datetime.getDate());
      return {
        ...reservation,
        datetime: new Date(reservation.datetime.getDate() + 1),
      };
    });
  }, [reservation]);

  const decrementDate = useCallback(() => {
    setReservation((prev: Reservation) => {
      console.log("prev:", reservation.datetime.getDate());
      return {
        ...reservation,
        datetime: new Date(prev.datetime.getDate() - 1),
      };
    });
  }, [reservation]);
  return (
    <div
      className="mt-12 md:mt-20 h-[320px] flex flex-col justify-center items-center 
    text-center divide-y divide-black border-t border-b border-black"
    >
      {/* Increment or decrement by 1 day */}
      <Input
        name="Date"
        reservation={reservation}
        increment={incrementDate}
        decrement={decrementDate}
      />
      {/* Increment or decrement by 15 minutes */}
      {/* <Input name="Time" reservation={reservation} /> */}
      {/* Increment or decrement by 1 guest */}
      {/* <Input name="Guest" reservation={reservation} /> */}
    </div>
  );
};
