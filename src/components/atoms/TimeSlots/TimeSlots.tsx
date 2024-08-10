import { useState } from "react";

export const TimeSlots = () => {
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
      className={"rounded-[8px] cursor-pointer " + getStyles()}
    >
      TimeSlots
    </div>
  );
};
