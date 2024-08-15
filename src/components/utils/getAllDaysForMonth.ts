export const getAllDaysForMonth = (month: number, year: number) => {
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
