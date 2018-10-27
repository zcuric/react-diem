import React, { Fragment } from "react";
import { startOfWeek, endOfWeek, eachDayOfInterval, format } from "date-fns";

const DaysLabel = ({ date }) => {
  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek(date, { weekStartsOn: 1 }),
    end: endOfWeek(date, { weekStartsOn: 1 })
  });
  return (
    <Fragment>
      {daysOfWeek.map(day => (
        <span key={format(day, "E")} className="day">
          {format(day, "E")}
        </span>
      ))}
    </Fragment>
  );
};

export default DaysLabel;
