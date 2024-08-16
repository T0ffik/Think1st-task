import { ChangeEvent, useState } from "react";
import { ValueIndicator } from "../ValueIndicator";
import { onChangeType } from "../../organism";

export const MIN_VALUE = 8;
const MAX_VALUE = 100;

type RangeInputProps = {
  setValue: onChangeType;
};

export const RangeInput = ({ setValue }: RangeInputProps) => {
  const [currentValue, setCurrentValue] = useState(MIN_VALUE);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.currentTarget.value);
    setCurrentValue(newValue);
    setValue(newValue, "age");
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
        defaultValue={MIN_VALUE}
        onChange={onChange}
      />
      <ValueIndicator value={currentValue.toString()} />
    </div>
  );
};
