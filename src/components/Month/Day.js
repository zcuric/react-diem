import React from "react";
import { format, isSameMonth, isSameDay, isWithinInterval } from "date-fns";
import styled from "styled-components";

const StyledDay = styled.div`
  flex-basis: 13%;
  font-weight: bold;
  color: ${props => (props.isSameMonth ? "blue" : "gray")};
  background-color: ${props =>
    props.isSelectedStartDay ||
    props.isSelectedEndDay ||
    props.isBetweenSelectedDates
      ? "red"
      : "white"};
`;

const Day = ({ date, day, selectedDates, onDayClick }) => {
  const { start, end } = selectedDates;

  return (
    <StyledDay
      isSameMonth={isSameMonth(date, new Date(day))}
      isSelectedStartDay={isSameDay(start, new Date(day))}
      isSelectedEndDay={isSameDay(end, new Date(day))}
      isBetweenSelectedDates={isWithinInterval(new Date(day), {
        start,
        end
      })}
    >
      <div onClick={() => onDayClick(day)} value={day}>
        {format(day, "d")}
      </div>
    </StyledDay>
  );
};

export default Day;
