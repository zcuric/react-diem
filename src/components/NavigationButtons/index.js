import React from "react";
import { addMonths, subMonths } from "date-fns";
import { CalendarContext } from "../Calendar";

const NavigationButtons = () => {
  return (
    <CalendarContext.Consumer>
      {({ date, updateDate }) => (
        <div className="buttons">
          <button onClick={() => updateDate(subMonths(date, 1))}>{`<`}</button>
          <button onClick={() => updateDate(addMonths(date, 1))}>{`>`}</button>
        </div>
      )}
    </CalendarContext.Consumer>
  );
};

export default NavigationButtons;
