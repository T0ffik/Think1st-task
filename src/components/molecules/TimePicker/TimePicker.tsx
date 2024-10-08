import { Dispatch, SetStateAction } from "react";
import { TimeSlots } from "../../atoms";
import { TimeType } from "../DatePicker";

const timeSlots = [
  { hour: 12, minutes: 0 },
  { hour: 14, minutes: 0 },
  { hour: 16, minutes: 30 },
  { hour: 18, minutes: 30 },
  { hour: 20, minutes: 0 },
];

type TimePickerProps = {
  value: TimeType;
  setValue: Dispatch<SetStateAction<TimeType>>;
};

export const TimePicker = ({ value, setValue }: TimePickerProps) => {
  return (
    <div className="flex flex-col gap-[8px] ">
      <label>Time</label>
      <div className="flex flex-col gap-[8px] max-[475px]:flex-row max-[475px]:gap-[9px] max-[475px]:flex-wrap">
        {timeSlots.map((slot) => {
          return (
            <TimeSlots
              setValue={setValue}
              currentValue={value}
              value={slot}
              key={`${slot.hour}:${slot.minutes || "00"}`}
            />
          );
        })}
      </div>
    </div>
  );
};
