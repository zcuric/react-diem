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

const daysOfWeek = date =>
  eachDayOfInterval({
    start: startOfWeek(date, { weekStartsOn: 1 }),
    end: endOfWeek(date, { weekStartsOn: 1 })
  });

const DaysLabel = () => {
  return (
    <div className="month">
      <CalendarContext.Consumer>
        {({ date }) =>
          daysOfWeek(date).map(day => (
            <StyledDayLabel key={format(day, "E")} className="day">
              {format(day, "E")}
            </StyledDayLabel>
          ))
        }
      </CalendarContext.Consumer>
    </div>
  );
};

export default DaysLabel;
