import React from "react";
import { CalendarContext } from "../Calendar";
import { format } from "date-fns";

const DisplayMonth = () => {
  return (
    <CalendarContext.Consumer>
      {({ date, locale }) => (
        <div className="displayMonth">
          {format(date, "MMMM Y.", { locale })}
        </div>
      )}
    </CalendarContext.Consumer>
  );
};

export default DisplayMonth;
