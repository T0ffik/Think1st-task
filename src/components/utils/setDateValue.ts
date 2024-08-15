import { Dispatch, SetStateAction } from "react";
import { DateType, TimeType } from "../molecules";
import { FormValues } from "../organism";

export const setDateValue = (
  date: DateType,
  time: TimeType,
  setValue: Dispatch<SetStateAction<FormValues>>
) => {
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
};
