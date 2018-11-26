import React, { useContext, useState, useEffect } from "react";
import { format, isValid as isValidDate, parse } from "date-fns";
import { CalendarContext } from "../Calendar";

const DateInput = () => {
  const { setDateRange, selectedDates, dateFormat } = useContext(
    CalendarContext
  );

  const [state, setState] = useState({
    start: format(selectedDates.start, dateFormat),
    end: format(selectedDates.end, dateFormat)
  });

  useEffect(
    () => {
      setState({
        start: format(selectedDates.start, dateFormat),
        end: format(selectedDates.end, dateFormat)
      });
    },
    [selectedDates]
  );

  const handleSubmit = e => {
    e.preventDefault();
    const start = parse(state.start, dateFormat, new Date());
    const end = parse(state.end, dateFormat, new Date());

    if (isValidDate(start) && isValidDate(end)) {
      setDateRange({
        start,
        end
      });
    }
  };

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="Start date"
        type="text"
        name="start"
        value={state.start}
        onChange={handleChange}
      />
      <input
        aria-label="End date"
        type="text"
        name="end"
        value={state.end}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default DateInput;
