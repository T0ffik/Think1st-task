import { useRef, useState } from "react";
import { ValueIndicator } from "../ValueIndicator";

const MIN_VALUE = 8;

export const RangeInput = () => {
  const [value, setValue] = useState("8");
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className=" w-[100%] relative">
      <label>Age</label>
      <div className=" flex justify-between">
        <span>8</span>
        <span>100</span>
      </div>
      <input
        type="range"
        min={MIN_VALUE}
        max={100}
        className="w-[100%] bg-cBorder-default accent-cBorder-active h-[6px] [&::-webkit-slider-runnable-track]:shadow-none [&::-ms-track]:appearance-none rounded-[50em] outline-none p-[0] m-[0] cursor-pointer [&::-webkit-slider-thumb]"
        defaultValue={MIN_VALUE}
        ref={ref}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <ValueIndicator value={value} />
    </div>
  );
};

// [&::-webkit-slider-runnable-track]:h-[4px] [&::-webkit-slider-runnable-track]:bg-cBorder-error [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:bg-[green]
