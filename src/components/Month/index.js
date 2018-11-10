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

const daysOfMonth = (date, weekStartsOn, locale) =>
  eachDayOfInterval({
    start: startOfWeek(startOfMonth(date, { weekStartsOn }, { locale })),
    end: endOfWeek(endOfMonth(date, { weekStartsOn }, { locale }))
  });

const Month = () => {
  return (
    <div className="month">
      <CalendarContext.Consumer>
        {context =>
          daysOfMonth(context.date, context.weekStartsOn, context.locale).map(
            day => (
              <Day
                onDayClick={context.onDayClick}
                onDayHover={context.onDayHover}
                selectedDates={context.selectedDates}
                key={day}
                date={context.date}
                day={day}
                locale={context.locale}
              />
            )
          )
        }
      </CalendarContext.Consumer>
    </div>
  );
};

export default Month;
