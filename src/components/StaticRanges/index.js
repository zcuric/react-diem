import React from "react";
import styled from "styled-components";
import { CalendarContext } from "../Calendar";

const StyledRange = styled.div`
  cursor: pointer;
`;

const StaticRanges = ({ ranges }) => {
  return (
    <CalendarContext.Consumer>
      {({ setDateRange, updateDate }) =>
        ranges.map(range => (
          <StyledRange
            key={range.label}
            onClick={() => {
              setDateRange(range);
              updateDate(range.start);
            }}
          >
            {range.label}
          </StyledRange>
        ))
      }
    </CalendarContext.Consumer>
  );
};

export default StaticRanges;
