import { useState, useRef } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

export const Form = () => {
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

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()}>
      <div
        className="mt-12 md:mt-20 flex flex-col justify-center items-center 
        text-center divide-y divide-black border-t border-b border-black"
      >
        {formStep == 0 && (
          <Step1
            currentDateTime={currentDateTime.current}
            date={date}
            setDate={setDate}
            guests={guests}
            setGuests={setGuests}
            setFormStep={setFormStep}
          />
        )}
        {formStep == 1 && (
          <Step2 date={date} guests={guests} setFormStep={setFormStep} />
        )}
      </div>
    </form>
  );
};
