import { Dispatch, SetStateAction, useCallback } from "react";
import left_arrow from "../../../images/Left_Arrow.png";
import right_arrow from "../../../images/Right_Arrow.png";
import { DateType, TimeType } from "../../molecules";
const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

type CalendarProps = {
  value: DateType;
  month: Date;
  daysofMonth: [Date[]];
  isCurrentMonthDisplayed: boolean;
  setValue: Dispatch<SetStateAction<DateType>>;
  setMonth: Dispatch<SetStateAction<Date>>;
  setTime: Dispatch<SetStateAction<TimeType>>;
};

export const Calendar = ({
  value,
  setValue,
  setMonth,
  setTime,
  month,
  daysofMonth,
  isCurrentMonthDisplayed,
}: CalendarProps) => {
  const setFocusedStyles = useCallback(
    (day: number) => {
      const isPickedDate = value.day === day;
      if (isCurrentMonthDisplayed && isPickedDate) {
        return "bg-cCta-default w-[24px] h-[24px] mx-[7.71px] rounded-[50%] text-cText-secondary";
      }
      return "";
    },
    [isCurrentMonthDisplayed, value]
  );
  return (
    <div className="flex flex-col">
      Date
      <div className=" bg-cBackgroun-white border-[1px] border-cBorder-default rounded-[8px] w-[326px] p-[24px]">
        <div className=" flex justify-between text-fsMedium font-medium">
          <img
            src={left_arrow}
            className="h-[16px]"
            onClick={() =>
              setMonth(
                (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
              )
            }
          />
          {month.toLocaleString("en", { month: "long" })}
          <img
            src={right_arrow}
            className="h-[16px]"
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
              {week.map((day) => {
                if (day === null || day === undefined) {
                  return <span className="w-[39.42px] text-center"></span>;
                }
                return (
                  <span
                    className={
                      "w-[39.42px] text-center text-fsMedium font-normal cursor-pointer " +
                      setFocusedStyles(day.getDate())
                    }
                    key={day.getDate()}
                    onClick={() => {
                      setTime({
                        hour: null,
                        minutes: null,
                      });
                      setValue({
                        day: day.getDate(),
                        month: day.getMonth(),
                        year: day.getFullYear(),
                      });
                    }}
                  >
                    {day.getDate()}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
