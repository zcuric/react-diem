import React from "react";
import styled from "styled-components";
import { addMonths, setMonth, setYear, format } from "date-fns";
import { CalendarContext } from "../Calendar";
import Select from "../Select";

const StyledSelectors = styled.div`
  width: 100%;
`;

const getMonths = locale => {
  const numberOfMonths = Array.from({ length: 12 }, (x, i) => i);
  return numberOfMonths.map(number => {
    const month = addMonths(new Date(2018, 0, 1), number);
    return {
      value: number,
      label: format(month, "MMMM", { locale })
    };
  });
};

const getYears = () => {
  const numberYears = Array.from({ length: 150 }, (x, i) => i + 1900);
  return numberYears.map(year => {
    return {
      value: year,
      label: year
    };
  });
};

const DateSelect = () => {
  return (
    <CalendarContext.Consumer>
      {({ date, updateDate, locale }) => {
        return (
          <StyledSelectors>
            <Select
              value={format(date, "M", { locale }) - 1}
              onChange={event => {
                return updateDate(
                  setMonth(date, parseInt(event.target.value, 10))
                );
              }}
              options={getMonths(locale)}
            />
            <Select
              value={format(date, "yyyy", { locale })}
              onChange={event => updateDate(setYear(date, event.target.value))}
              options={getYears()}
            />
          </StyledSelectors>
        );
      }}
    </CalendarContext.Consumer>
  );
};

export default DateSelect;
