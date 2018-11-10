import React from "react";
import { format } from "date-fns";
import { CalendarContext } from "../Calendar";

const DisplayRange = () => {
  return (
    <CalendarContext.Consumer>
      {({ selectedDates, dateFormat, locale }) => {
        const start = format(selectedDates.start, dateFormat, { locale });
        const end = format(selectedDates.end, dateFormat, { locale });
        return <div className="displayRange">{`${start} - ${end}`}</div>;
      }}
    </CalendarContext.Consumer>
  );
};

export default DisplayRange;
