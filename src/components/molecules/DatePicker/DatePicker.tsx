import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Calendar } from "../../atoms";
import { TimePicker } from "../TimePicker";
import { FormValues } from "../../organism";

type DatePickerProps = {
  value: Date | null;
  setValue: Dispatch<SetStateAction<FormValues>>;
};

export type DateType = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type TimeType = {
  hour: number | null;
  minutes: number | null;
};

export const DatePicker = ({ value, setValue }: DatePickerProps) => {
  const [date, setDate] = useState<DateType>({
    day: null,
    month: null,
    year: null,
  });
  const [time, setTime] = useState<TimeType>({ hour: null, minutes: null });
  console.log(time);
  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      date: new Date(date.year, date.month, date.day, time.hour, time.minutes),
    }));
  }, [time, date]);
  return (
    <div className=" flex justify-between">
      <Calendar value={date} setValue={setDate} />
      <TimePicker value={time} setValue={setTime} />
    </div>
  );
};
