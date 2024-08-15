import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { Calendar } from "../../atoms";
import { TimePicker } from "../TimePicker";
import { FormValues } from "../../organism";
import { setDateValue } from "../../utils/setDateValue";
import { getAllDaysForMonth } from "../../utils/getAllDaysForMonth";

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
  const isDatePicked = useMemo(() => date.day !== null, [date]);

  useEffect(() => {
    setIsCurrentMonthDisplayed(
      currentMonth.getMonth() === date.month &&
        currentMonth.getFullYear() === date.year
    );
  }, [currentMonth, date]);

  useEffect(() => {
    setDateValue(date, time, setValue);
  }, [time, date]);
  return (
    <div className=" flex justify-between max-[475px]:flex-col max-[475px]:gap-[24px]">
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
