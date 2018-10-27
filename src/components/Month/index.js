import React from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth
} from "date-fns";
import DayName from "./DayName";

const Month = ({ date }) => {
  const daysOfMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(date), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(date), { weekStartsOn: 1 })
  });

  return (
    <div className="month">
      <DayName date={date} />
      {daysOfMonth.map(
        day =>
          isSameMonth(date, new Date(day)) ? (
            <strong key={day} className="day">
              {format(day, "d")}
            </strong>
          ) : (
            <span key={day} className="day">
              {format(day, "d")}
            </span>
          )
      )}
    </div>
  );
};

export default Month;
