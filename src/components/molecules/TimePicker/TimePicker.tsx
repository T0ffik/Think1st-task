import { TimeSlots } from "../../atoms";

const timeSlots = ["12:00", "14:00", "16:30", "18:30", "20:00"];

export const TimePicker = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      Time
      {timeSlots.map((slot) => (
        <TimeSlots value={slot} />
      ))}
    </div>
  );
};
