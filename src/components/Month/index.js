import React from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths
} from "date-fns";
import Day from "../Day";
import { CalendarContext } from "../Calendar";

const daysOfMonth = (date, locale, number) =>
  eachDayOfInterval({
    start: addMonths(startOfWeek(startOfMonth(date, { locale })), number),
    end: addMonths(endOfMonth(date, { locale }), number)
  });

const Month = ({ number }) => {
  return (
    <CalendarContext.Consumer>
      {({ date, locale, onDayClick, onDayHover, selectedDates }) => (
        <div className="month">
          {daysOfMonth(date, locale, number).map(day => (
            <Day
              onDayClick={onDayClick}
              onDayHover={onDayHover}
              selectedDates={selectedDates}
              key={day}
              date={date}
              day={day}
              locale={locale}
            />
          ))}
        </div>
      )}
    </CalendarContext.Consumer>
  );
};

export default Month;
