import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Calendar } from "../../atoms";
import { TimePicker } from "../TimePicker";
import { FormValues } from "../../organism";

export type holidayType = "OBSERVANCE" | "NATIONAL_HOLIDAY" | "SEASON";

export type holiday = {
  country: string;
  iso: string;
  year: number;
  date: string;
  day: string;
  name: string;
  type: holidayType;
};

type DatePickerProps = {
  setValue: Dispatch<SetStateAction<FormValues>>;
  holidays: holiday[] | null;
  errorMessage?: string;
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
  const daysDividedIntoWeeks: [(Date | null)[]] = [[]];
  let i = 0;
  days.forEach((day, index) => {
    const dayNumber = day.getDay() === 0 ? 6 : day.getDay() - 1;
    if (i === 0 && daysDividedIntoWeeks[i].length === 0) {
      for (let j = 0; j < dayNumber; j++) {
        daysDividedIntoWeeks[i].push(null);
      }
    }
    daysDividedIntoWeeks[i][dayNumber] = day;
    if (dayNumber === 6) {
      ++i;
      daysDividedIntoWeeks.push([]);
    }
    if (index + 1 === days.length && dayNumber !== 6) {
      for (let j = dayNumber; j < 6; j++) {
        daysDividedIntoWeeks[i].push(null);
      }
    }
  });
  return daysDividedIntoWeeks;
};

export const DatePicker = ({ setValue, holidays }: DatePickerProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isCurrentMonthDisplayed, setIsCurrentMonthDisplayed] = useState(true);
  const [date, setDate] = useState<DateType>({
    year: null,
    month: null,
    day: null,
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
    if (
      date.year !== null &&
      date.month !== null &&
      date.day !== null &&
      time.hour !== null &&
      time.minutes !== null
    ) {
      const year = date.year;
      const month = date.month;
      const day = date.day;
      const hour = time.hour;
      const minutes = time.minutes;
      setValue((prev) => ({
        ...prev,
        date: new Date(year, month, day, hour, minutes),
      }));
    }
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
        holidays={holidays}
      />
      {isDatePicked && isCurrentMonthDisplayed && (
        <TimePicker value={time} setValue={setTime} />
      )}
    </div>
  );
};
