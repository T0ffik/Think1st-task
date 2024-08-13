import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TimeType } from "../../molecules";

type TimeSlotsProps = {
  currentValue: TimeType;
  setValue: Dispatch<SetStateAction<TimeType>>;
  value: { hour: number; minutes: number };
};

export const TimeSlots = ({
  value,
  setValue,
  currentValue,
}: TimeSlotsProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const getStyles = () => {
    if (isSelected) {
      return "border-[1px] border-cBorder-active";
    }
    return "border-[1px] border-cBorder-default";
  };
  useEffect(() => {
    setIsSelected(
      value.hour === currentValue.hour && value.minutes === currentValue.minutes
    );
  }, [value, currentValue]);

  return (
    <div
      onClick={() => setValue(value)}
      className={
        "rounded-[8px] cursor-pointer bg-cBackgroun-white w-[76px] h-[46px] flex justify-center items-center " +
        getStyles()
      }
    >
      {`${value.hour}:${value.minutes || "00"}`}
    </div>
  );
};
