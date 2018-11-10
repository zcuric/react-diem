import React, { useState } from "react";
import { compareAsc } from "date-fns";
import { enUS } from "date-fns/locale";

export const CalendarContext = React.createContext({
  date: new Date(),
  selectedDates: {
    start: new Date(),
    end: new Date()
  },
  dateFormat: "dd.MM.yyyy",
  locale: enUS,
  weekStartsOn: 0,
  updateDate: () => {},
  onDayHover: () => {},
  onDayClick: () => {}
});

const Calendar = props => {
  const [date, setDate] = useState(props.date);
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(),
    end: new Date(),
    hoverDate: new Date(),
    selectionInProcess: false
  });

  const updateDate = date => setDate(date);

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
        start: date,
        end: date,
        hoverDate: date,
        selectionInProcess: true
      });
    }

    if (compareAsc(date, start) === 1) {
      return setSelectedDates({
        ...selectedDates,
        end: date,
        selectionInProcess: false
      });
    }

    if (compareAsc(date, start) === -1) {
      return setSelectedDates({
        ...selectedDates,
        start: date,
        end: start,
        selectionInProcess: false
      });
    }
  };

  return (
    <CalendarContext.Provider
      value={{
        date,
        selectedDates,
        dateFormat: props.dateFormat || "dd.MM.yyyy",
        locale: props.locale || enUS,
        weekStartsOn: props.weekStartsOn || 0,
        onDayClick,
        onDayHover,
        updateDate
      }}
    >
      {props.children}
    </CalendarContext.Provider>
  );
};

export default Calendar;
