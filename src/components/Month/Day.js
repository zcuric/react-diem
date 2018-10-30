import React, { useState } from "react";
import { format, isSameMonth } from "date-fns";
import styled from "styled-components";

const StyledDay = styled.div`
  flex-basis: 13%;
  font-weight: bold;
  color: ${props => (props.isSameMonth ? "blue" : "gray")};
`;

const Day = ({ date, day }) => {
  const [selected, setSelected] = useState(false);
  return (
    <StyledDay
      selected={selected}
      isSameMonth={isSameMonth(date, new Date(day))}
    >
      <div onClick={() => setSelected(!selected)}>{format(day, "d")}</div>
    </StyledDay>
  );
};

export default Day;
