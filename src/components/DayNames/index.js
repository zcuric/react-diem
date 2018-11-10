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

const daysOfWeek = (date, weekStartsOn, locale) =>
  eachDayOfInterval({
    start: startOfWeek(date, { weekStartsOn }, { locale }),
    end: endOfWeek(date, { weekStartsOn }, { locale })
  });

const DaysLabel = () => {
  return (
    <div className="month">
      <CalendarContext.Consumer>
        {({ date, weekStartsOn, locale }) =>
          daysOfWeek(date, weekStartsOn, locale).map(day => (
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
