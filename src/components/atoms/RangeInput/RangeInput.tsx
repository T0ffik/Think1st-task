import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ValueIndicator } from "../ValueIndicator";
import { FormValues } from "../../organism";

export const MIN_VALUE = 8;
const MAX_VALUE = 100;

type RangeInputProps = {
  value: number;
  setValue: Dispatch<SetStateAction<FormValues>>;
};

export const RangeInput = ({ value, setValue }: RangeInputProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.currentTarget.value);
    setValue((prev) => ({ ...prev, age: newValue }));
  };
  return (
    <div className=" w-[100%] relative mb-[30px]">
      <label>Age</label>
      <div className=" flex justify-between">
        <span>{MIN_VALUE}</span>
        <span>{MAX_VALUE}</span>
      </div>
      <input
        type="range"
        min={MIN_VALUE}
        max={MAX_VALUE}
        className="w-[100%] bg-cBorder-default accent-cBorder-active h-[6px] [&::-webkit-slider-runnable-track]:shadow-none [&::-ms-track]:appearance-none rounded-[50em] outline-none p-[0] m-[0] cursor-pointer [&::-webkit-slider-thumb]"
        defaultValue={value}
        onChange={onChange}
      />
      <ValueIndicator value={value.toString()} />
    </div>
  );
};
