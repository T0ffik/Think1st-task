import { useEffect, useState } from "react";
import { MIN_VALUE } from "../RangeInput";
import { positions, positionsMobile } from "./positions";

type ValueIndicatorProps = {
  value: string;
};

export const ValueIndicator = ({ value }: ValueIndicatorProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const setPosition = () => {
    console.log(windowWidth);
    if (windowWidth < 475) {
      return;
    }
  };
  console.log(window.innerWidth);
  console.log(windowWidth);
  setPosition();
  useEffect(() => {
    console.log(1);
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <div
      className={`bg-[url('/indicator.png')] w-[37px] h-[31px] text-center pt-[6px] absolute text-cBorder-active ${
        positions[Number(value) - MIN_VALUE]
      } ${positionsMobile[Number(value) - MIN_VALUE]}`}
    >
      {value}
    </div>
  );
};
