import { useState } from "react";

type TimeSlotsProps = {
  value: string;
};

export const TimeSlots = ({ value }: TimeSlotsProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const getStyles = () => {
    if (isSelected) {
      return "border-[1px] border-cBorder-active";
    }
    return "border-[1px] border-cBorder-default";
  };

  return (
    <div
      onClick={() => setIsSelected((prev) => !prev)}
      className={
        "rounded-[8px] cursor-pointer bg-cBackgroun-white w-[76px] h-[46px] flex justify-center items-center " +
        getStyles()
      }
    >
      {value}
    </div>
  );
};
