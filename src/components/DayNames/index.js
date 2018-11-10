import React from "react";
import { startOfWeek, endOfWeek, eachDayOfInterval, format } from "date-fns";
import styled from "styled-components";
import { CalendarContext } from "../Calendar";

const StyledDayLabel = styled.div`
  height: 35px;
  display: flex;
  flex-basis: 13%;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
  color: #424874;
  font-weight: 500;
`;

const daysOfWeek = (date, locale) =>
  eachDayOfInterval({
    start: startOfWeek(date, { locale }),
    end: endOfWeek(date, { locale })
  });

const DaysLabel = () => {
  return (
    <div className="month">
      <CalendarContext.Consumer>
        {({ date, locale }) =>
          daysOfWeek(date, locale).map(day => (
            <StyledDayLabel key={format(day, "E", { locale })} className="day">
              {format(day, "E", { locale })}
            </StyledDayLabel>
          ))
        }
      </CalendarContext.Consumer>
    </div>
  );
};

export default DaysLabel;
