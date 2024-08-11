import { useState } from "react";
import left_arrow from "../../../images/Left_Arrow.png";
import right_arrow from "../../../images/Right_Arrow.png";
const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
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

export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const daysofMonth = getAllDaysForMonth(
    currentMonth.getMonth(),
    currentMonth.getFullYear()
  );
  //   console.log(daysofMonth);
  return (
    <div className="flex flex-col">
      Date
      <div className=" bg-cBackgroun-white border-[1px] border-cBorder-default rounded-[8px] w-[326px] p-[24px]">
        <div className=" flex justify-between text-fsMedium font-medium">
          <img
            src={left_arrow}
            className="h-[16px]"
            onClick={() =>
              setCurrentMonth(
                (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
              )
            }
          />
          {currentMonth.toLocaleString("en", { month: "long" })}
          <img
            src={right_arrow}
            className="h-[16px]"
            onClick={() =>
              setCurrentMonth(
                (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
              )
            }
          />
        </div>
        <div className="flex justify-between mt-[32px]">
          {days.map((day) => (
            <span className="text-fsSmall font-medium w-[39.42px] text-center">
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
                  <span className="w-[39.42px] text-center text-fsMedium font-normal">
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
