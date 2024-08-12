import { Calendar, CTA, FileInput, RangeInput, Textfield } from "../../atoms";
import { TimePicker } from "../../molecules";

export const Form = () => {
  return (
    <form className=" flex flex-col gap-[24px]">
      <h2 className="text-fsExtraBig font-medium text-cText-primary">
        Personal info
      </h2>
      <Textfield label="First Name" value="" />
      <Textfield label="Last Name" value="" />
      <Textfield label="Email Address" value="" />
      <RangeInput />
      <FileInput />
      <h2 className="text-fsExtraBig font-medium text-cText-primary mt-[24px]">
        Your workout
      </h2>
      <div className=" flex justify-between">
        <Calendar />
        <TimePicker />
      </div>
      <CTA>Send Application</CTA>
    </form>
  );
};
