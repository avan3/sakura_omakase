import { Input } from "./Input";

export const Form = () => {
  return (
    <div
      className="mt-12 md:mt-20 h-[320px] flex flex-col justify-center items-center 
    text-center divide-y divide-black border-t border-b border-black"
    >
      <Input name="Date" />
      <Input name="Time" />
      <Input name="Guest" />
    </div>
  );
};
