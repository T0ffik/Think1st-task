import { DateType, TimeType } from "../molecules";
import { onChangeType } from "../organism";

export const setDateValue = (
  date: DateType,
  time: TimeType,
  setValue: onChangeType
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
    setValue(new Date(year, month, day, hour, minutes), "date");
  }
};
