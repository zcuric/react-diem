import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  compareAsc,
  format
} from "date-fns";
import DayName from "./DayName";
import Day from "./Day";

const Month = ({ date }) => {
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date(),
    hoverDate: new Date(),
    selectionInProcess: false
  });

  const daysOfMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(date), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(date), { weekStartsOn: 1 })
  });

  const onDayHover = date => {
    if (selectedDates.selectionInProcess) {
      setSelectedDates({
        ...selectedDates,
        hoverDate: date
      });
    }
  };

  const onDayClick = date => {
    const { start, end, selectionInProcess } = selectedDates;
    if (
      compareAsc(date, start) === 0 ||
      compareAsc(date, end) === 0 ||
      !selectionInProcess
    ) {
      return setSelectedDates({
        ...selectedDates,
        start: new Date(date),
        end: new Date(date),
        selectionInProcess: true
      });
    }
    if (compareAsc(date, start) === 1) {
      return setSelectedDates({
        ...selectedDates,
        end: new Date(date),
        selectionInProcess: false
      });
    }
    if (compareAsc(date, start) === -1) {
      return setSelectedDates({
        ...selectedDates,
        start: new Date(date),
        end: start,
        selectionInProcess: false
      });
    }
  };

  return (
    <>
      <h4>
        {format(selectedDates.start, "dd.MM.y")} -{" "}
        {format(selectedDates.end, "dd.MM.y")}
      </h4>
      <div className="month">
        <DayName date={date} />
        {daysOfMonth.map(day => (
          <Day
            onDayClick={onDayClick}
            onDayHover={onDayHover}
            selectedDates={selectedDates}
            key={day}
            date={date}
            day={day}
          />
        ))}
      </div>
    </>
  );
};

export default Month;
