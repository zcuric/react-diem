import React, { useState } from "react";
import { format, isSameMonth, isSameDay } from "date-fns";
import styled from "styled-components";
import { isInInterval } from "../../utils";

const StyledDay = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  height: 35px;
  display: flex;
  flex-basis: 13%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${props => (props.isSameMonth ? "#424874" : "#D5D7E5")};
  ${props =>
    props.isBetweenSelectedDates || props.isBetweenHoverAndSelectedDate
      ? "background-color: #D5D7E5; color: #424874 "
      : "background-color: white;"};
  ${props =>
    props.isSelectedStartDay || props.isSelectedEndDay
      ? "background-color: #808084; color: white "
      : ""};
  ${props => (props.hover ? "border: 1px solid #424874" : "")};
`;

const Day = ({ date, day, selectedDates, onDayClick, onDayHover, locale }) => {
  const [state, setState] = useState({ hover: false });
  const { start, end, hoverDate, selectionInProcess } = selectedDates;

  return (
    <StyledDay
      isSameMonth={isSameMonth(date, day)}
      isSelectedStartDay={isSameDay(start, day)}
      isSelectedEndDay={isSameDay(end, day)}
      isBetweenSelectedDates={
        isInInterval(day, {
          start,
          end
        }) && !selectionInProcess
      }
      isBetweenHoverAndSelectedDate={
        isInInterval(day, {
          start,
          end: hoverDate
        }) && selectionInProcess
      }
      onMouseOver={() => (selectionInProcess ? onDayHover(day) : false)}
      onMouseEnter={() =>
        !selectionInProcess ? setState({ hover: true }) : false
      }
      onMouseLeave={() => setState({ hover: false })}
      onClick={() => onDayClick(day)}
      value={day}
      hover={state.hover}
    >
      {format(day, "d", { locale })}
    </StyledDay>
  );
};

export default Day;
