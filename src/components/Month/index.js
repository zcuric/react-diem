import React from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval
} from "date-fns";
import Day from "../Day";
import { CalendarContext } from "../Calendar";

const daysOfMonth = date =>
  eachDayOfInterval({
    start: startOfWeek(startOfMonth(date), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(date), { weekStartsOn: 1 })
  });

const Month = () => {
  return (
    <div className="month">
      <CalendarContext.Consumer>
        {context =>
          daysOfMonth(context.date).map(day => (
            <Day
              onDayClick={context.onDayClick}
              onDayHover={context.onDayHover}
              selectedDates={context.selectedDates}
              key={day}
              date={context.date}
              day={day}
            />
          ))
        }
      </CalendarContext.Consumer>
    </div>
  );
};

export default Month;
