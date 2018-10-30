import React from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval
} from "date-fns";
import DayName from "./DayName";
import Day from "./Day";

const Month = ({ date }) => {
  const daysOfMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(date), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(date), { weekStartsOn: 1 })
  });

  return (
    <div className="month">
      <DayName date={date} />
      {daysOfMonth.map(day => (
        <Day key={day} date={date} day={day} />
      ))}
    </div>
  );
};

export default Month;
