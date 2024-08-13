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

const getAllDaysForMonth = (month: number, year: number) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  const array: [Date[]] = [[]];
  let i = 0;
  days.forEach((day, index) => {
    const dayNumber = day.getDay() === 0 ? 6 : day.getDay() - 1;
    if (i === 0 && array[i].length === 0) {
      for (let j = 0; j < dayNumber; j++) {
        //@ts-ignore
        array[i].push(null);
      }
    }
    array[i][dayNumber] = day;
    if (dayNumber === 6) {
      ++i;
      array.push([]);
    }
    if (index + 1 === days.length && dayNumber !== 6) {
      for (let j = dayNumber; j < 6; j++) {
        //@ts-ignore
        array[i].push(null);
      }
    }
  });
  return array;
};

export const DatePicker = ({ value, setValue }: DatePickerProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isCurrentMonthDisplayed, setIsCurrentMonthDisplayed] = useState(true);
  const [date, setDate] = useState<DateType>({
    day: null,
    month: null,
    year: null,
  });
  const [time, setTime] = useState<TimeType>({ hour: null, minutes: null });
  const daysofMonth = getAllDaysForMonth(
    currentMonth.getMonth(),
    currentMonth.getFullYear()
  );
  const isDatePicked = date.day !== null;
  useEffect(() => {
    setIsCurrentMonthDisplayed(
      currentMonth.getMonth() === date.month &&
        currentMonth.getFullYear() === date.year
    );
  }, [currentMonth, date]);
  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      date: new Date(date.year, date.month, date.day, time.hour, time.minutes),
    }));
  }, [time, date]);
  return (
    <div className=" flex justify-between">
      <Calendar
        value={date}
        setValue={setDate}
        setMonth={setCurrentMonth}
        month={currentMonth}
        daysofMonth={daysofMonth}
        isCurrentMonthDisplayed={isCurrentMonthDisplayed}
        setTime={setTime}
      />
      {isDatePicked && isCurrentMonthDisplayed && (
        <TimePicker value={time} setValue={setTime} />
      )}
    </div>
  );
};
