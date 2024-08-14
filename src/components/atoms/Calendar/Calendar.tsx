import { Dispatch, SetStateAction, useCallback } from "react";
import left_arrow from "../../../images/Left_Arrow.png";
import right_arrow from "../../../images/Right_Arrow.png";
import { DateType, holiday, TimeType } from "../../molecules";
const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

type CalendarProps = {
  value: DateType;
  month: Date;
  daysofMonth: [(Date | null)[]];
  isCurrentMonthDisplayed: boolean;
  setValue: Dispatch<SetStateAction<DateType>>;
  setMonth: Dispatch<SetStateAction<Date>>;
  setTime: Dispatch<SetStateAction<TimeType>>;
  holidays: holiday[] | null;
};

export const Calendar = ({
  value,
  setValue,
  setMonth,
  setTime,
  month,
  daysofMonth,
  isCurrentMonthDisplayed,
  holidays,
}: CalendarProps) => {
  const setFocusedStyles = useCallback(
    (isPicked: boolean, isFreeDay: boolean) => {
      if (isCurrentMonthDisplayed && isPicked) {
        return "bg-cCta-default w-[24px] h-[24px] mx-[7.71px] rounded-[50%] text-cText-secondary cursor-pointer";
      }
      if (isFreeDay) {
        return "w-[39.42px] cursor-default text-cText-inactive";
      }
      return "w-[39.42px] cursor-pointer";
    },
    [isCurrentMonthDisplayed]
  );
  const renderDays = (day: Date | null) => {
    if (day === null || day === undefined) {
      return <span className="w-[39.42px] text-center"></span>;
    }
    const isPickedDate = value.day === day.getDate();
    const currentHoliday = holidays?.find((holiday) => {
      return (
        new Date(holiday.date).toDateString() ===
        new Date(
          day.getFullYear(),
          day.getMonth(),
          day.getDate()
        ).toDateString()
      );
    });
    const isFreeDay =
      currentHoliday?.type === "NATIONAL_HOLIDAY" || day.getDay() === 0;
    const onClick = () => {
      if (isFreeDay) {
        return;
      }
      setTime({
        hour: null,
        minutes: null,
      });
      setValue({
        day: day.getDate(),
        month: day.getMonth(),
        year: day.getFullYear(),
      });
    };
    return (
      <span
        className={
          "text-center text-fsMedium font-normal " +
          setFocusedStyles(isPickedDate, isFreeDay)
        }
        key={day.getDate()}
        onClick={onClick}
      >
        {day.getDate()}
      </span>
    );
  };

  return (
    <div className="flex flex-col">
      Date
      <div className=" bg-cBackgroun-white border-[1px] border-cBorder-default rounded-[8px] w-[326px] p-[24px]">
        <div className=" flex justify-between text-fsMedium font-medium">
          <img
            src={left_arrow}
            className="h-[16px] cursor-pointer"
            onClick={() =>
              setMonth(
                (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
              )
            }
          />
          {month.toLocaleString("en", { month: "long" })} {month.getFullYear()}
          <img
            src={right_arrow}
            className="h-[16px] cursor-pointer"
            onClick={() =>
              setMonth(
                (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
              )
            }
          />
        </div>
        <div className="flex justify-between mt-[32px]">
          {days.map((day) => (
            <span
              key={day}
              className="text-fsSmall font-medium w-[39.42px] text-center"
            >
              {day}
            </span>
          ))}
        </div>
        <div className="flex flex-col">
          {daysofMonth.map((week) => (
            <div className="flex justify-between mt-[9px]">
              {week.map((day) => renderDays(day))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
